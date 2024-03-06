import { api } from "../../Config/ApiConfig"
import { FIND_PRODUCT_BY_CAREGORY_REQUEST, FIND_PRODUCT_BY_CATEGORY_FAILURE, FIND_PRODUCT_BY_CATEGORY_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType"

export const findById = (productId) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    const { id } = productId;
    try {
        const { data } = await api.get(`/api/product/${id}`)
        console.log("product----", data)
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        console.log("-----", error)
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }
}

export const products = (reqData) =>async (dispatch) => {
    const { color, price, size, minPrice, maxPrice, minDiscount, maxDiscount, stock, category, sort, pageNumber, pageSize } = reqData
    dispatch({ type: FIND_PRODUCT_BY_CAREGORY_REQUEST })
    try {
        const { data } =await api.get(`/api/products?color=${color}&price=${price}&size=${size}
      &minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}
      &maxDiscount=${maxDiscount}&stock=${stock}&category=${category}&
      sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
      console.log("product-----",data)
        dispatch({type:FIND_PRODUCT_BY_CATEGORY_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_CATEGORY_FAILURE,payload:error.message})
    }

}