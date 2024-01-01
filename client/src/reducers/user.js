import { FETCH, CREATE, UPDATEROLE, DELETE, } from "../constants/actionTypes";

export default (user = [], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload
        case CREATE:
            return [...user, action.payload]
        default:
            return user
    }
}