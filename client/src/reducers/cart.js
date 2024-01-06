import { ADD_TO_CART } from '../constants/actionTypes';

const persistedCartItems = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

const initialState = {
    cartItems: persistedCartItems,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const updatedCart = {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            }
            localStorage.setItem('cart', JSON.stringify(updatedCart.cartItems));
            return updatedCart;
        default:
            return state;
    }
};

