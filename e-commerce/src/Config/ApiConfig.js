import axios from "axios"
export const API_BASE_URL="http://localhost:1213"
const jwt=localStorage.getItem("jwt")

export const api=axios.create({
    baseURL:API_BASE_URL,
    Headers:{
        "Authorization": `Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})