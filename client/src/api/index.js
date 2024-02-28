import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const API = axios.create({ baseURL: "http://localhost:5000" })

let unsubscribe; // To store the unsubscribe function

// Function to get the Firebase user token
const getUserToken = async () => {
    return new Promise((resolve, reject) => {
        unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const token = await user.getIdToken();
                    unsubscribe(); // Stop listening to further auth state changes
                    resolve(token);
                } catch (error) {
                    console.error('Error getting user token:', error);
                    unsubscribe(); // Stop listening on error
                    reject(error);
                }
            } else {
                unsubscribe(); // Stop listening if user is null
                resolve(null);
            }
        });
    });
};

// Interceptor to set token in Axios headers before each request
API.interceptors.request.use(async (req) => {
    const token = await getUserToken();
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
}, (error) => {
    return Promise.reject(error);
});

export const fetchProducts = () => API.get('/products')
export const fetchProduct = (id) => API.get(`/products/${id}`)

export const createProduct = (newProduct) => API.post(`/products/`, newProduct)
export const updateProduct = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct)
export const deleteProduct = (id) => API.delete(`/products/${id}`)

export const fetchUsers = () => API.get('/users')
// export const fetchUser = (id) => API.get(`/users/${id}`)
export const createUser = (newUser) => API.post(`/users`, newUser)


export const fetchOrders = () => API.get('/orders')
export const fetchOrder = (id) => API.get(`/orders/${id}`)

export const createOrder = (newOrder) => API.post(`/orders`, newOrder)
export const fetchUserOrders = (id) => API.get(`/orders/users/${id}`)
// export const updateOrders = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct)
// export const deleteOrders = (id) => API.delete(`/products/${id}`)