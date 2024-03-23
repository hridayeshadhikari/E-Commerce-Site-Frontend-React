import api from "../../../Config/ApiConfig"
import { CANCEL_ORDER_FAILURE, CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, CONFIRM_ORDER_FAILURE, CONFIRM_ORDER_REQUEST, CONFIRM_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIPPED_ORDER_FAILURE, SHIPPED_ORDER_REQUEST } from "./ActionType"

export const getOrders=()=>async(dispatch)=>{
    dispatch({type:GET_ORDERS_REQUEST})
    try {
        const {data}=await api.get("api/admin/order/")
        dispatch({type:GET_ORDERS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_ORDERS_FAILURE,payload:error.message})
    }
}

export const confirmOrder=(orderId)=>async (dispatch)=>{
    dispatch({type:CONFIRM_ORDER_REQUEST})
    try {
        const {data}=await api.put(`api/admin/order/${orderId}/confirmed`)
        dispatch({type:CONFIRM_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CONFIRM_ORDER_FAILURE,payload:error.message})
    }
}

export const shippedOrder=(orderId)=>async (dispatch)=>{
    dispatch({type:SHIPPED_ORDER_REQUEST})
    try {
        const {data}=await api.put(`api/admin/order/${orderId}/shipped`)
        dispatch({type:CONFIRM_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:SHIPPED_ORDER_FAILURE,payload:error.message})
    }
}

export const cancelOrder=(orderId)=>async (dispatch)=>{
    dispatch({type:CANCEL_ORDER_REQUEST})
    try {
        const {data}=await api.put(`api/admin/order/${orderId}/cancel`)
        dispatch({type:CANCEL_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CANCEL_ORDER_FAILURE,payload:error.message})
    }
}

export const deleteOrder=(orderId)=>async (dispatch)=>{
    dispatch({type:DELETE_ORDER_REQUEST})
    try {
        const {data}=await api.delete(`api/admin/order/${orderId}/delete`)
        dispatch({type:DELETE_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:DELETE_ORDER_FAILURE,payload:error.message})
    }
}

export const deliveredOrder=(orderId)=>async (dispatch)=>{
    dispatch({type:DELIVERED_ORDER_REQUEST})
    try {
        const {data}=await api.put(`api/admin/order/${orderId}/delivered`)
        dispatch({type:DELIVERED_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:DELIVERED_ORDER_FAILURE,payload:error.message})
    }
}