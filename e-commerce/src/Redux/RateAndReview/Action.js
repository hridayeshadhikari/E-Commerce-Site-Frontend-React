import api from "../../Config/ApiConfig"
import { CREATE_RATING_FAILURE, CREATE_RATING_SUCCESS, CREATE_REVIEW_FAILURE, CREATE_REVIEW_SUCCESS, GET_ALL_RATINGS_FAILURE, GET_ALL_RATINGS_SUCCESS, GET_ALL_REVIEWS_FAILURE, GET_ALL_REVIEWS_SUCCESS } from "./ActioType";

export const createReview=(reqData)=>async (dispatch)=>{
    try {
        const {data}=await api.post("/api/review/create",reqData);
        dispatch({type:CREATE_REVIEW_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CREATE_REVIEW_FAILURE,payload:error.message})
    }
}

export const getALLReview=(productId)=>async (dispatch)=>{
    try {
        const {data}=await api.post(`/api/review/create/${productId}`);
        dispatch({type:GET_ALL_REVIEWS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_ALL_REVIEWS_FAILURE,payload:error.message})
    }
}

export const getALLRating=(productId)=>async (dispatch)=>{
    try {
        const {data}=await api.post(`/api/rating/product/${productId}`);
        dispatch({type:GET_ALL_RATINGS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_ALL_RATINGS_FAILURE,payload:error.message})
    }
}

export const createRating=(reqData)=>async (dispatch)=>{
    try {
        const {data}=await api.post("/api/rating/rate",reqData);
        dispatch({type:CREATE_RATING_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CREATE_RATING_FAILURE,payload:error.message})
    }
}