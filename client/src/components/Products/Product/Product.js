import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { BsPlus, BsEyeFill } from 'react-icons/bs'

import { addToCart, deleteItem } from '../../../actions/cart'

import '../styles.css'

const Product = ({ product }) => {

  const shopCart = useSelector((state) => state.cart.cartItems);
  const cartSize = shopCart.length;

  const dispatch = useDispatch()
  const { _id, productImage, title, category, price } = product

  const handleCart = () => {
    const newItem = { ...product, amount: 1 }
    const cartItem = shopCart.find((item) => {
      return item._id === _id
    })

    if (cartItem) {
      const newCart = [...shopCart].map(item => {
        if (item._id === _id) {
          dispatch(deleteItem(item))
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })
      dispatch(addToCart(newCart))
    } else {
      dispatch(addToCart(newItem))
    }
  }
  console.log(shopCart)

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[350px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-[full] flex justify-center items-center'>
          <div className="w-[280px] py-4 mx-auto flex justify-center items-center">
            <img className='max-h-[360px] group-hover:scale-110 transition duration-300' src={productImage} alt={title} />
          </div>
        </div>
        <div className='absolute top-1 -right-14 group-hover:right-1 p-2 flex flex-col items-center justify-center gap-y-2  group-hover:opacity-100 transition-all duration-300 '>
          <button>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl' onClick={handleCart} />

            </div>
          </button>
          <Link to={`/product/${_id}`} className='w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className='text-md capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${_id}`} style={{ textDecoration: 'none' }}><h4 className='font-semibold mb-1 text-black'>{title}</h4></Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  )
}

export default Product