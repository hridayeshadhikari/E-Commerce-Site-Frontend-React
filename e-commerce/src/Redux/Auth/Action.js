import axios from 'axios';
import { API_BASE_URL } from '../../Config/ApiConfig';
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './ActionType';



export const signup = (userData) => async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST })
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/register`, userData)
        if (data.token) {
            localStorage.setItem("jwt", data.token)
        }
        console.log("register success", data)
        dispatch({ type: SIGNUP_SUCCESS, payload: data.jwt })
    } catch (error) {
        console.log("--------", error)
        dispatch({ type: SIGNUP_FAILURE, payload: error })
    }
}

export const login = (userData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/login`, userData)
        if (data.token) {
            localStorage.setItem("jwt", data.token)
        }
        console.log("login success", data)
        dispatch({ type: LOGIN_SUCCESS, payload: data })
    }
    catch (error) {
        console.log("------", error)
        dispatch({ type: LOGIN_FAILURE, payload: error })
    }
}

export const getUserProfile = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/user/profile`,
            {
                headers:{
                    "Authorization": `Bearer ${jwt}`,
                },
            },
        );
        console.log("user----",data)
        dispatch({type:GET_USER_SUCCESS,payload:data})
    } catch (error) {
        console.log("------",error)
        dispatch({type:GET_USER_FAILURE,payload:error})
    }
}

export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    localStorage.clear();
}