import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { createProduct, updateProduct } from '../../../../actions/products';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Form = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    const [productData, setProductData] = useState({ title: '', description: '', category: '', status: '', price: '', productImage: '' })
    const product = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId) : null)
    useEffect(() => {
        if (product) {
            setProductData(product)
        }
    }, [product])

    const handleSubmit = (e) => {
        // update takes a reload idk why 
        if (currentId) {
            dispatch(updateProduct(currentId, productData))
        } else {
            dispatch(createProduct(productData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setProductData({
            title: "",
            description: "",
            category: "",
            status: "",
            price: "",
            productImage: "",
        });
    }
    return (
        <>
            <Paper elevation={6} className='px-4 py-4'>
                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Typography variant="h6">Product Entry</Typography>
                    <TextField style={{ margin: 10 }} name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
                    <TextField style={{ margin: 10 }} name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
                    <TextField style={{ margin: 10 }} name="category" variant="outlined" label="Category" fullWidth value={productData.category} onChange={(e) => setProductData({ ...productData, category: e.target.value })} />
                    <TextField style={{ margin: 10 }} name="status" variant="outlined" label="Status" fullWidth value={productData.status} onChange={(e) => setProductData({ ...productData, status: e.target.value })} />
                    <TextField style={{ margin: 10 }} name="price" variant="outlined" label="Price" fullWidth value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
                    <div className='mt-3'>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, productImage: base64 })}></FileBase>
                    </div>
                    <div className='mt-3'>
                        <Button style={{ marginBottom: 10 }} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                        <Button variant="contained" color="warning" size="medium" onClick={clear} fullWidth>Clear</Button>
                    </div>
                </form>
            </Paper></>

    )
}

export default Form