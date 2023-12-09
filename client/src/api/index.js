import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" })


export const fetchProducts = () => API.get('/products')
export const fetchProduct = (id) => API.get(`/products/${id}`)


export const updateProduct = (id, updatedProduct) => API.post(`/admin/products/${id}`, updatedProduct)
export const deleteProduct = (id) => API.delete(`/admin/products/${id}`)
