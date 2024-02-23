import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import CartItem from '../Cart/CartItem'

import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'

import { SidebarContext } from './SidebarContext'
import { CartContext } from '../Cart/CartContext'

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext)

    const { cart, clearCart, total } = useContext(CartContext)

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} 
            w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw]
            transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
                <div
                    onClick={handleClose}
                    className='cursor-pointer w-8 h-8 flex 
                    justify-center items-center'
                >
                    <IoMdArrowForward className='text-2xl' />
                </div>
            </div>
            <div className='flex flex-col gap-y-2 h-[550px] lg:h-[640px]\
                overflow-y-auto overflow-x-hidden border-b'>
                {cart.map((item) => {
                    return <CartItem item={item} key={item._id} />
                })}
            </div>
            <div className='flex flex-col gap-y-3 py-4 mt-4'>
                <div className='flex w-full justify-between items-center'>
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total: </span>Rs. {parseFloat(total).toFixed(2)}
                    </div>
                    <div
                        className='cursor-pointer py-4 bg-red-500
                 text-white w-12 h-12 flex justify-center items-center text-xl'
                        onClick={clearCart} ><FiTrash2 />
                    </div>
                </div>
                <Link
                    to=''
                    style={{ textDecoration: 'none' }}
                    className='bg-blue-50 flex p-4 justify-center items-center text-black w-full font-medium'>Checkout</Link>
            </div>
        </div>
    )
}

export default Sidebar