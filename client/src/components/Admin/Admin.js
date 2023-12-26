import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper, TextareaAutosize } from '@mui/material';
import { createProduct, getProducts } from '../../actions/products';
import { useDispatch } from 'react-redux';
import AllProducts from './AllProducts/AllProducts';

const Admin = () => {
    const [productData, setProductData] = useState({ title: '', description: '', tags: '', price: '' })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createProduct({ ...productData }))
        clear()
    }

    const clear = () => {
        setProductData({
            title: "",
            description: "",
            tags: "",
            price: "",
        });
    }

    return (
        <div style={{
            display: "flex",
            marginTop: " 200px",
            flexDirection: "column",
            alignItems: "center"
        }}>

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
            <AllProducts />
        </div>
    )
}

export default Admin
// return (
//     <>
//         <div className='cards'>
//             <h2>Khai k po lekhne vanya thiyeu birse hehe</h2>
//             <span className='line'></span>
//             <div className='container'>
//                 <div className='content'>
//                     {products.map((product) => (
//                         <Grid key={product._id} item>
//                             <div className='card'>
//                                 <img src={dummyImg} width="100%" height="100%" />
//                                 <p>{product.title}</p>
//                                 <p><span>{product.tags}</span></p>
//                                 <p>{product.price}</p>

//                             </div>
//                         </Grid>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </>
// )