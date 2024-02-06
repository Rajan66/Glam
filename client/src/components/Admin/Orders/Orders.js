import React from 'react'
import { useSelector } from 'react-redux'

const Orders = () => {
  const orders = useSelector((state) => state.orders)
  console.log(orders)
  return (
    <div>
     
    </div>
  )
}

export default Orders