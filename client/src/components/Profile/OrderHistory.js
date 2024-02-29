import React, { useEffect, useState } from 'react'

const OrderHistory = ({ orders }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orders) {
      setLoading(true);
    } else {
      setLoading(false)
    }
  }, [orders])

  console.log(orders[0]._id)

  return (
    <div className='container w-full h-full overflow-y-auto'>
      {orders.map((order) => (
        <div key={order._id}>
          <p>Order id: {order._id}</p>
          <p>Status: {order.status}</p>
          {order.products.map((product) => (
            <div key={product.productId}>
              <p>Product Title: {product.title} x {product.quantity}</p>
             
            </div>
          ))}
          <p>Total Quantity: {order.products.reduce((acc, product) => acc + product.quantity, 0)}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default OrderHistory