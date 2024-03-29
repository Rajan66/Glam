import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'

import { CartContext } from './CartContext'

const CartItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

    // destructure item
    const { _id, productImage, title, category, price, amount } = item
    return (
        <div className='flex gap-x-4 py-2 lg:px-6 border-b
         border-gray-200 w-full font-light text-gray-500'>
            <div className='w-full min-h-[150px] flex 
                items-center gap-x-4'>
                <Link to={`/product/${_id}`}>
                    <img className='max-w-[80px]' src={productImage} alt='product' />
                </Link>
                <div className='w-full flex flex-col '>
                    {/* title and remove icon */}
                    <div className='flex justify-between mb-2'>
                        <Link to={`/product/${_id}`} style={{ textDecoration: 'none' }}
                            className='uppercase font-medium max-w-[240px]
                            text-black'>{title}
                        </Link>
                        <div className='text-xl cursor-pointer' onClick={() => removeFromCart(_id)}>
                            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
                        </div>
                    </div>
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
        </div>
    )
}

export default CartItem