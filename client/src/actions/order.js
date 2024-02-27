import { FETCH_ORDERS, FETCH, CREATE } from "../constants/actionTypes";
import * as api from '../api'

export const getOrders = () => async (dispatch) => {
    try {
        const { data } = await api.fetchOrders()
        dispatch({ type: FETCH_ORDERS, payload: data })

    } catch (error) {
        console.log(error.message)
    }
}

export const getOrder = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchOrder(id)
        dispatch({ type: FETCH, payload: data })

    } catch (error) {
        console.log(error.message)
    }
}

export const createOrder = (order) => async (dispatch) => {
    try {
        console.log(order)
        const { data } = await api.createOrder(order)
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}
