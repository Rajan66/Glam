import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import Product from './Product/Product'

const Products = () => {
    const products = useSelector((state) => state.products)
    return (
        <>
            <Grid>
                {products.map((product) => (

                    <Grid key={product._id} item>
                        <Product product={product} />
                    </Grid>
                ))}

            </Grid>
        </>
    )
}

export default Products