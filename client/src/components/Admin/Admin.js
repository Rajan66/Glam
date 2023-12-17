import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper, TextareaAutosize } from '@mui/material';

const Admin = () => {
    const [productData, setProductData] = useState({ title: '', descripton: '', tags: '', price: '' })

    const handleSubmit = () => {

    }

    return (
        <div>

            <Paper   elevation={6}>

                <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Typography variant="h6">Creating a Product</Typography>
                    <TextField style={{ margin: 10 }} name="title" variant="outlined" label="Title" fullWidth value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
                    <TextField style={{ margin: 10 }} name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={productData.descripton} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
                    <TextField style={{ margin: 10 }} name="tags" variant="outlined" label="Tags" fullWidth value={productData.tags} onChange={(e) => setProductData({ ...productData, tags: e.target.value.split(',') })} />
                    <TextField style={{ margin: 10 }} name="price" variant="outlined" label="Price" fullWidth value={productData.price} onChange={(e) => setProductData({ ...productData, title: e.target.value })} />
                    <Button style={{ marginBottom: 10 }}  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="warning" size="medium" fullWidth>Clear</Button>
                </form>

            </Paper>


        </div>
    )
}

export default Admin