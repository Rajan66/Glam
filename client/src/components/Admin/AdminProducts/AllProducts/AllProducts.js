import React from 'react'
import './AllProducts.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../../../actions/products'

import { Grid, IconButton } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete"
import UpdateIcon from "@mui/icons-material/Edit"


const AllProducts = ({ setCurrentId }) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    return (
        <>
            {/* <Grid>
                {products.map((product) => (
                    <Grid key={product._id} item>
                        <div style={{ display: "flex", padding: "20px" }}> */}
                            {/* <img src={dummyImg} width="100%" height="100%" /> */}
                            {/* <p>{product.title}</p>
                            <p><span>{product.tags}</span></p>
                            <p>{product.price}</p>
                            <IconButton color='primary' onClick={() => setCurrentId(product._id)} >
                                <UpdateIcon />
                            </IconButton>
                            <IconButton color='primary' onClick={() => dispatch(deleteProduct(product._id))} >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </Grid>
                ))}

            </Grid > */}

<br></br>
<div className='container'>
            <table>
                <thead>
                <tr className='tb'>
                    <th>Product name</th>
                    <th>Title</th>
                    <th>Product name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {/* { */}
                        {/* List.map(item =>{ */}
                            <tr className='tb'>
                        <td>
                            <div>
                                <img src='' alt=''/>
                                <div>
                                    <span>Liner</span>
                                    <span>Marker pen what this</span>
                                </div>
                            </div>
                        </td>
                        <td>Marker pen</td>
                        <td>Marker pen</td>
                        <td>2000</td>
                        <td>
                        <IconButton color='primary' >
                        <UpdateIcon />
                        </IconButton>
                        <IconButton color='primary'  >
                        <DeleteIcon />
                        </IconButton></td>
                    </tr>
                    <tr className='tb'>
                    <td>
                            <div>
                                <img src='' alt=''/>
                                <div>
                                    <span>Blush</span>
                                    <span>Dil blusher blusher hogaya</span>
                                </div>
                            </div>
                        </td>
                        <td>Rose</td>
                        <td>Rose</td>
                        <td>1000</td>
                        <td>
                        <IconButton color='primary' >
                        <UpdateIcon />
                        </IconButton>
                        <IconButton color='primary'  >
                        <DeleteIcon />
                        </IconButton></td>
                    </tr>
                    <tr className='tb'>
                    <td>
                            <div>
                                <img src='' alt=''/>
                                <div>
                                    <span>Primer</span>
                                    <span>Not to prime is a crime</span>
                                </div>
                            </div>
                        </td>
                        <td>Primer</td>
                        <td>Primer</td>
                        <td>1000</td>
                        <td>
                        <IconButton color='primary' >
                        <UpdateIcon />
                        </IconButton>
                        <IconButton color='primary'  >
                        <DeleteIcon />
                        </IconButton></td>
                    </tr>
                    
                        {/* }) */}
                    {/* } */}
                    
                </tbody>
            </table>
        </div>
        </>
    )
}

export default AllProducts