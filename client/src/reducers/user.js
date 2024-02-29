import { FETCH_USERS, UPDATE, CREATE, UPDATEROLE, DELETE, } from "../constants/actionTypes";

export default (users = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload
        case CREATE:
            return [...users, action.payload]
        case UPDATE:
            return users.map((user) => (user.id === action.payload ? action.payload : user))
        default:
            return users
    }
}