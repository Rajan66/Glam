import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { createProduct, updateProduct } from '../../../../actions/products';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Form = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    const [productData, setProductData] = useState({ title: '', description: '', category: '', price: '', productImage: '' })
    const product = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId) : null)
    useEffect(() => {
        if (product) {
            setProductData(product)
        }
    }, [product])

    const handleSubmit = (e) => {
        e.preventDefault()
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
            price: "",
            productImage:"",
        });
    }
    return (
        <Paper elevation={6}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Product</Typography>
                <TextField style={{ margin: 10 }} name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
                <TextField style={{ margin: 10 }} name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
                <TextField style={{ margin: 10 }} name="category" variant="outlined" label="Category" fullWidth value={productData.category} onChange={(e) => setProductData({ ...productData, category: e.target.value.split(',') })} />
                <TextField style={{ margin: 10 }} name="price" variant="outlined" label="Price" fullWidth value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
                <div>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, productImage: base64 })}></FileBase>
                </div>
                <Button style={{ marginBottom: 10 }} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="warning" size="medium" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form