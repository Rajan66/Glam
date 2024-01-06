import React from 'react'
import './ProductsView.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../../../actions/products'

import { IconButton } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete"
import UpdateIcon from "@mui/icons-material/Edit"


const AllProducts = ({ setCurrentId }) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    return (
        <div className='container'>
            <table>
                <thead>
                    <tr className='tb' >
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr className='tb'>
                            <td><div><img src={product.productImage} /></div></td>
                            <td><div><span>{product.title}</span></div></td>
                            <td>{product.title}</td>
                            <td>{product.category}</td>
                            <td>2000</td>
                            <td>
                                <IconButton color='primary' onClick={() => setCurrentId(product._id)} >
                                    <UpdateIcon />
                                </IconButton>
                                <IconButton color='primary' onClick={() => dispatch(deleteProduct(product._id))} >
                                    <DeleteIcon />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllProducts