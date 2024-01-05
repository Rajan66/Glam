import { ADD_TO_CART } from '../constants/actionTypes';

const initialState = {
    cartItems: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        default:
            return state;
    }
};

