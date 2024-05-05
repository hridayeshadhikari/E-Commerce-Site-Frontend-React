import {
  CANCEL_ORDER_FAILURE,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_HISTORY_FAILURE,
  GET_ORDER_HISTORY_REQUEST,
  GET_ORDER_HISTORY_SUCCESS,
} from "./ActionType";
import api from "../../Config/ApiConfig";

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const { data } = await api.post("/api/order/", reqData.address);
    if (data.id) {
      reqData.navigate({ search: `step=3&order_id=${data.id}` });
    }
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/order/${orderId}`);
    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
  }
};

export const orderHistory = () => async (dispatch) => {
  dispatch({ type: GET_ORDER_HISTORY_REQUEST });
  try {
    const { data } = await api.get("/api/order/all");
    dispatch({ type: GET_ORDER_HISTORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDER_HISTORY_FAILURE, payload: error.message });
  }
};

export const cancelOrderRequest = (orderId) => async (dispatch) => {
  dispatch({ type: CANCEL_ORDER_REQUEST });
  try {
    const { data } = await api.put(`/api/order/${orderId}/cancel`);
    dispatch({ type: CANCEL_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CANCEL_ORDER_FAILURE, payload: error.message });
  }
};
