import React from 'react'

import { Link } from 'react-router-dom'

const CartItem = ({ item }) => {
    // destructure item
    const { _id, productImage, title, category, price } = item
    return (
        <div className='flex'>
            <div className='w-full min-h-[150px] flex 
                items-center gap-x-4'>
                <Link to={`/product/${_id}`}>
                    <img className='max-w-[80px]' src={productImage} alt='product' />
                </Link>
            </div>
        </div>
    )
}

export default CartItem