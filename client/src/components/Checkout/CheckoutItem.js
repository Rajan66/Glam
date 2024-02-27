import React, { useContext } from 'react'

import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../Cart/CartContext'

const CheckoutItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

    const { _id, productImage, title, category, price, amount } = item

    return (
        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.productImage} alt="" />
            <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{item.title}</span>
                <span className="float-right text-gray-400"></span>
                <div className=' flex gap-x-2 h-[36px] text-sm'>
                    {/* qty */}
                    <div className='flex flex-1 max-w-[100px] 
                         items-center h-full border text-black font-medium'>
                        {/* minus icon */}
                        <div
                            onClick={() => decreaseAmount(_id)}
                            className='flex-1 h-full flex justify-center items-center cursor-pointer '
                        >
                            <IoMdRemove />
                        </div>
                        {/* amount */}
                        <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                        {/* plus icon */}
                        <div
                            onClick={() => increaseAmount(_id)}
                            className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                            <IoMdAdd />
                        </div>
                    </div>
                    {/* item price */}
                    <div className='flex-1 flex justify-around items-center'>Rs. {price}</div>
                    {/* final price */}
                    <div className='flex-1 flex justify-end items-center text-black font-medium'>{`Rs. ${parseFloat(price * amount).toFixed(2)}`}</div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem