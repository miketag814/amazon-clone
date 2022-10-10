import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order'
import './Orders.css'
import { useStateValue } from "./StateProvider"


function Orders() {
    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {

        if (user) {

            //below is syntax on firebase to get order data
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    //below maps the product to make array of data
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }
    }, [])


    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders_order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}

            </div>

        </div>
    )
}

export default Orders