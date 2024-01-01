import { FETCH_ALL, CREATE, UPDATEROLE, DELETE } from "../constants/actionTypes";
import * as api from '../api'

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers()
        dispatch({ type: FETCH_ALL, payload: data })

    } catch (error) {
        console.log(error.message)
    }
}

export const createUser = (userData) => async (dispatch) => {
    try {
        const { data } = await api.createUser(userData)
        dispatch({ type: CREATE, payload: data })

    } catch (error) {
        console.log(error.message)
    }
}