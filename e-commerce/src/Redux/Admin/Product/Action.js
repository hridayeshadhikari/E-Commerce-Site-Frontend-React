import api from "../../../Config/ApiConfig"
import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS } from "./ActionType"

export const deleteProduct=(id)=>async(dispatch)=>{
    dispatch({type:DELETE_PRODUCT_REQUEST})
    try {
        const {data}=await api.delete(`/api/admin/product/${id}`);
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:data.id})
    } catch (error) {
        dispatch({type:DELETE_PRODUCT_FAILURE,payload:error.message})
    }
}