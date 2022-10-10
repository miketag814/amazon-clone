import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';

function Order({order}) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}
        </p>
        <p className='order_id'>
            <snall>{order.id}</snall>
        </p>
        {order.data.basket?.map(item => (
            <CheckoutProduct 
                item={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton={item.hideButton}
            />
        ))}

    </div>
  )
}

export default Order