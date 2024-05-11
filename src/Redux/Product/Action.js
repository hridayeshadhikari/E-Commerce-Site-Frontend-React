import axios from "axios";
import api, { API_BASE_URL } from "../../Config/ApiConfig";
import {
  FIND_PRODUCT_BY_CATEGORY_REQUEST,
  FIND_PRODUCT_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_CATEGORY_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";

export const findById = (productId) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/apis/product/${productId}`
    );
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

export const getProducts = (reqData) => async (dispatch) => {
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
    const { data } = await axios.get(
      `${API_BASE_URL}/apis/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    dispatch({ type: FIND_PRODUCT_BY_CATEGORY_SUCCESS, payload: data });
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
