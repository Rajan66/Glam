import { FETCH_ALL, CREATE, UPDATE, DELETE, } from "../constants/actionTypes";

export default (products = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...products, action.payload]
        case UPDATE:
            return products.map((product) => (product.id === action.payload ? action.payload : product))
        case DELETE:
            return products.filter((product) => product._id !== action.payload)
        default:
            return products
    }
}