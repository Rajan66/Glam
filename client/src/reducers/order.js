import { FETCH_ALL, CREATE } from "../constants/actionTypes";

export default (orders = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...orders, action.payload]
        default:
            return orders
    }
}