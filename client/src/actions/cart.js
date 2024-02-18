import { ADD_TO_CART } from '../constants/actionTypes'


export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    };
};
