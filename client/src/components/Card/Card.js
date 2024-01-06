import React from 'react'
import './Card.css'
import { Button, Grid, IconButton } from '@mui/material'
import Cart from '@mui/icons-material/ShoppingBag'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../actions/cart'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({ products }) => {
    // store 5-8 random products in a array and display in the featured products

    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <div className='cards'>
            <div className='container'>
                <h2>Featured Products</h2>
                <span className='line'></span>
                <div className='content'>
                    {products.map((product) => (
                        <Grid key={product._id} item>
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
                        </Grid>
                    ))}
                    <Button onClick={()=>navigate(`/products`)}>
                        View All
                    </Button>
                </div>
            </div>
        </div>
    )


}

export default Card