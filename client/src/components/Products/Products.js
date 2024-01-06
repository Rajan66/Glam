import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import Product from './Product/Product'

import './styles.css'

const Products = () => {
    const products = useSelector((state) => state.products)
    return (
        <div className='cards'>
            <div className='container'>
                <h2>All Products</h2>
                <span className='line'></span>
                <div className='content'></div>
                {products.map((product) => (
                    <Grid key={product._id} item>
                        <Product product={product} />
                    </Grid>
                ))}

            </div>
        </div>

    )
}

export default Products