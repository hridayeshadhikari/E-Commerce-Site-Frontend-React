import api from "../../../Config/ApiConfig"
import { GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from "./ActionType"

export const getAllUsers=()=>async(dispatch)=>{
    dispatch({type:GET_ALL_USERS_REQUEST})
    try {
        const {data}=await api.get("/api/admin/users")
        dispatch({type:GET_ALL_USERS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_ALL_USERS_FAILURE})
    }
}