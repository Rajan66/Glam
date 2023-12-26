import { Grid, Button } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete"
import UpdateIcon from "@mui/icons-material/Edit"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../../actions/products'

const AllProducts = ({ setCurrentId }) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    return (
        <>
            <Grid>
                {products.map((product) => (

                    <Grid key={product._id} item>
                        <div style={{ display: "flex", padding: "20px" }}>
                            {/* <img src={dummyImg} width="100%" height="100%" /> */}
                            <p>{product.title}</p>
                            <p><span>{product.tags}</span></p>
                            <p>{product.price}</p>
                            <Button onClick={() => setCurrentId(product._id)} startIcon={<UpdateIcon />}></Button>
                            <Button onClick={() => dispatch(deleteProduct(product._id))} startIcon={<DeleteIcon />}></Button>
                        </div>
                    </Grid>
                ))}

            </Grid>
        </>
    )
}

export default AllProducts