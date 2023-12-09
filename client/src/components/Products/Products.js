import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'

const Product = () => {
    const products = useSelector((state) => state.products)

    return (
        <>
            <Grid>
                {products.map((product) => (
                    <Grid className="actionDiv" key={product._id} item >
                        {product}
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Product