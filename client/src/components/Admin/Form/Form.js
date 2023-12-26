import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material';
import { createProduct, updateProduct } from '../../../actions/products';
import { useDispatch, useSelector } from 'react-redux';

const Form = ({ currentId,setCurrentId }) => {
    const dispatch = useDispatch()
    const [productData, setProductData] = useState({ title: '', description: '', tags: '', price: '' })
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
            tags: "",
            price: "",
        });
    }
    return (
        <Paper elevation={6}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Product</Typography>
                <TextField style={{ margin: 10 }} name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
                <TextField style={{ margin: 10 }} name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
                <TextField style={{ margin: 10 }} name="tags" variant="outlined" label="Tags" fullWidth value={productData.tags} onChange={(e) => setProductData({ ...productData, tags: e.target.value.split(',') })} />
                <TextField style={{ margin: 10 }} name="price" variant="outlined" label="Price" fullWidth value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
                <Button style={{ marginBottom: 10 }} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="warning" size="medium" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form