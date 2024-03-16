
import api from "../../Config/ApiConfig";
import { FIND_PRODUCT_BY_CATEGORY_REQUEST, FIND_PRODUCT_BY_CATEGORY_FAILURE, FIND_PRODUCT_BY_CATEGORY_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType"

export const findById = (productId) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
  try {
    const { data } = await api.get(`/api/product/${productId}`)
    console.log("product----", data)
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
  } catch (error) {
    console.log("-----", error)
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
  }
}

export const getProducts = (reqData) =>async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_CATEGORY_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    const { data } = await api.get(
      `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    console.log("get product by category - ", data);
    dispatch({type: FIND_PRODUCT_BY_CATEGORY_SUCCESS,payload:data});
  } catch (error) {
    dispatch({
      type: FIND_PRODUCT_BY_CATEGORY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};