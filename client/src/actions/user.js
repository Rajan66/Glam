import { FETCH, CREATE, UPDATEROLE, DELETE } from "../constants/actionTypes";
import * as api from '../api'

export const createUser = (userData) => async (dispatch) => {
    try {
        const { data } = await api.createUser(userData)
        dispatch({ type: CREATE, payload: data })

    } catch (error) {
        console.log(error.message)
    }
}