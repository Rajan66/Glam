import { ADD_TO_CART, DELETE } from '../constants/actionTypes';

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
        case DELETE:
            const deletedCart = state.cartItems.filter((item) => item._id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(deletedCart.cartItems));
            return deletedCart;
        default:
            return state;
    }
};

