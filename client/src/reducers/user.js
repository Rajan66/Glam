import { FETCH_USERS, FETCH_USER, CREATE, UPDATEROLE, DELETE, } from "../constants/actionTypes";

export default (users = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload
        case CREATE:
            return [...users, action.payload]
        default:
            return users
    }
}