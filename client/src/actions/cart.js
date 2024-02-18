import { ADD_TO_CART, DELETE } from '../constants/actionTypes'


export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    };
};

export const deleteItem = async (item) => {
    return {
        type: DELETE,
        payload: item,
    };
};