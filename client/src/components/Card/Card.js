import React from 'react'
import './Card.css'
import { Grid } from '@mui/material'
import dummyImg from '../../images/bg.jpg'

const Card = ({ products }) => {
    // store 5-8 random products in a array and display in the featured products
    return (
        <div className='cards'>
            <div className='container'>
                <h2>Featured Products</h2>
                <span className='line'></span>
                <div className='content'>
                    {products.map((product) => (
                        <Grid key={product._id} item>
                            <div className='card'>
                                <img src={product.productImage} width="100%" height="100%" />
                                <p>{product.title}</p>
                                <p><span>{product.tags}</span></p>
                                <p>{product.price}</p>

                            </div>
                        </Grid>
                    ))}
                </div>
            </div>

        </div>
    )


}

export default Card