import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Payment.css'
import { Link, useNavigate } from "react-router-dom"
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import { useEffect } from 'react';
import axios from './axios';
import {db} from './firebase';



function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disable, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect (() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expect the total in a currencies sub-units
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            //backend data
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async(event) => {
        event.preventefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confrimation

            //creating backend data for orders page
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate("/orders", {replace: true})
        })
    }

    const handleChnage = event => {
        //listen for chnages in the cardelement and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    const value=getBasketTotal(basket);

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>

                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angelos, CA</p>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className='payment_item'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChnage} />

                            <div className='payment_priceContainer'>
                                <h3>Order Total: ${value}</h3>
                                <button disabled={processing || disable || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "But Now"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment