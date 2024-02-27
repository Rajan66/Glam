import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import deliveryIcon from '../../images/icons/delivery-bike.png'
import pickupIcon from '../../images/icons/cosmetics.png'

const Checkout = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems)
  // const cartSize = cartItems.length;




  const handleCheckout = () => {

  }

  return (
    <>

      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
          {/* products */}
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                <span className="float-right text-gray-400">42EU - 8.5US</span>
                <p className="text-lg font-bold">$138.99</p>
              </div>
            </div>
          </div>

          {/* shipping methods */}
          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                <img className="w-14 object-contain" src={deliveryIcon} alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Home Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
                <img className="w-14 object-contain" src={pickupIcon} alt="" />
                <div className="ml-5">
                  <span className="mt-1 font-semibold">Local Pickup</span>
                </div>
              </label>
            </div>
          </form>
        </div>

        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">Complete your order by providing your payment details.</p>
          <div className="">
            {/* Email */}
            <label for="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-3 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              </div>
            </div>
            {/* fullname */}
            <label for="name" className="mt-4 mb-2 block text-sm font-medium">Full Name</label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border 
               border-gray-200 px-3 py-3 pl-11 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>

            <label for="address" className="mt-4 mb-2 block text-sm font-medium">Address</label>
            <div className="relative">
              <input type="text"
                id="address"
                name="address"
                className="w-full rounded-md border
               border-gray-200 px-3 py-3 pl-11 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your address"
              />
            </div>


            <label for="city" className="mt-4 mb-2 block text-sm font-medium">City</label>
            <div className="relative">
              <input
                type="text"
                id="city"
                name="city"
                className="w-full rounded-md border
               border-gray-200 px-3 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your city name"
              />
            </div>


            <label for="state" className="mt-4 mb-2 block text-sm font-medium">State</label>
            <div className="relative">
              <input type="text"
                id="state"
                name="state"
                className="w-full rounded-md border
               border-gray-200 px-3 py-3 pl-11 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your state"
              />
            </div>


            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">$399.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">$8.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Proceed to Payment</button>
        </div>
      </div>
    </>
  )
}

export default Checkout