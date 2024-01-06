import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { addToCart } from '../../../actions/cart'

import { Grid, IconButton } from '@mui/material'
import Cart from '@mui/icons-material/ShoppingBag'

import '../styles.css'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className='card'>
        <Link to={`/product/${product._id}`}>
          <img src={product.productImage} width="100%" height="100%" />
        </Link>
        <p>{product.title}</p>
        <p><span>{product.tags}</span></p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>{product.price}</p>
          <IconButton onClick={() => dispatch(addToCart(product))}>
            <Cart />
          </IconButton>
        </div>
      </div>
    </>
  )
}

export default Product