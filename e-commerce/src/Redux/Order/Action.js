import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS } from "./ActionType"

export const createOrder=(reqData)=>async (dispatch)=>{
    dispatch({type:CREATE_ORDER_REQUEST})
    try {
        const {data}=await api.post("/api/order/",reqData.address)
        if(data.id){
            reqData.navigate({search:`step=3&order_id=${data.id}`});
        }
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
    }   
}

export const getOrderById=(orderId)=>async (dispatch)=>{
    dispatch({type:GET_ORDER_BY_ID_REQUEST})
    const {id}=orderId
    try {
        const {data}=await api.get(`/api/order/${id}`)
        dispatch({type:GET_ORDER_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_ORDER_BY_ID_FAILURE,payload:error.message})
    }
}

export const orderHistory=()=>async (dispatch)=>{
    dispatch({type:GET_ORDER_HISTORY_REQUEST})
    try {
        const {data}=await api.post("/api/order/all")
        dispatch({type:GET_ORDER_HISTORY_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_ORDER_HISTORY_FAILURE,payload:error.message})
    }
}