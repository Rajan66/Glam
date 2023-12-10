import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'

const Product = () => {
    const products = useSelector((state) => state.products)
    console.log(products)
    return (
        <>
            <Grid>
                one
                {products.map((product) => (
                    <Grid className="actionDiv" key={product._id} item >
                        hey
                        {product}
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Product