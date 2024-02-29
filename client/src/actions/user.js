import { FETCH_USERS,CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from '../api'

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers()
        dispatch({ type: FETCH_USERS, payload: data })

    } catch (error) {
        console.log(error.message)
    }
}

// export const getUser = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.fetchUser(id)
//         dispatch({ type: FETCH_USER, payload: data })

//     } catch (error) {
//         console.log(error.message)
//     }
// }

export const createUser = (userData) => async (dispatch) => {
    try {
        const { data } = await api.createUser(userData)
        dispatch({ type: CREATE, payload: data })

    } catch (error) {
        console.log(error.message)
    }
}

export const updatedUser = (id, updatedUser) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, updatedUser)
        console.log(data)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}