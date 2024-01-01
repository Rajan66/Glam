import { FETCH_ALL, CREATE, UPDATEROLE, DELETE, } from "../constants/actionTypes";

export default (users = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...users, action.payload]
        default:
            return users
    }
}