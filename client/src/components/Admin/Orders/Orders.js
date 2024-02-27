import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../../actions/order'
import OrderItem from './OrderItem';

const Orders = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.orders)

  useEffect(() => {
    dispatch(getOrders())
  }, [])
  
  return (
    <>
      {orders ? (
        <div className="order-list">
          <h2>Orders</h2>
          {orders.map(order => (
            <OrderItem key={order._id} order={order} />
          ))}
        </div>
      ) : (
        <div>
          No orders
        </div>
      )}

    </>
  );
};


export default Orders