import { FETCH_ORDERS,FETCH_USER_ORDERS, CREATE } from "../constants/actionTypes";

export default (orders = [], action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return action.payload
        case FETCH_USER_ORDERS:
            return action.payload
        case CREATE:
            return [...orders, action.payload]
        default:
            return orders
    }
}