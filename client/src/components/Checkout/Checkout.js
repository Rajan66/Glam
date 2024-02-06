import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Checkout = () => {
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems)
  // const cartSize = cartItems.length;

  


  const handleCheckout = () =>{

  }

  return (
    <div>
      <div>
       {cartItems.map((item)=>
        item.title
       )}
      </div>
      <div onClick={handleCheckout}>
      Proceed to checkout 
      </div>
    </div>
  )
}

export default Checkout