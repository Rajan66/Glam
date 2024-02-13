import { combineReducers } from 'redux'

import products from './products'
import user from './user'
import cart from './cart'
import orders from './orders'

import cartReducer from '../reducers/cart'

const persistedCartItems = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

const initialState = {
    cart: {
        cartItems: persistedCartItems,
    },
};


export default combineReducers({ products, user, orders,cart: cartReducer })