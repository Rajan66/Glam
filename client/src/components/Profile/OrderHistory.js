import React from 'react'
import { useSelector } from 'react-redux'

const OrderHistory = () => {
  const orders = useSelector((state) => state.orders)
  console.log(orders)
  return (
    <div>
      {orders.map((order) => {
        <div key={order._id}>
            {order._id}
        </div>
      })}
    </div>
  )
}

export default OrderHistory