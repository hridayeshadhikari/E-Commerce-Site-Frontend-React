import {
  CANCEL_ORDER_FAILURE,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  CONFIRM_ORDER_FAILURE,
  CONFIRM_ORDER_REQUEST,
  CONFIRM_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELIVERED_ORDER_FAILURE,
  DELIVERED_ORDER_REQUEST,
  DELIVERED_ORDER_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  SHIPPED_ORDER_FAILURE,
  SHIPPED_ORDER_REQUEST,
  SHIPPED_ORDER_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: false,
  error: null,
  orders: [],
};

export const adminOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONFIRM_ORDER_REQUEST:
    case SHIPPED_ORDER_REQUEST:
    case CANCEL_ORDER_REQUEST:
    case DELIVERED_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: false,
      };

    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    case GET_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        orders: [],
      };

    case CONFIRM_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        confirmed: action.payload,
      };

    case SHIPPED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        shipped: action.payload,
        error: null,
      };
    case CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        cancel: action.payload,
      };
    case DELIVERED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        delivered: action.payload,
      };
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deletedOrder: action.payload,
      };

    case CONFIRM_ORDER_FAILURE:
    case SHIPPED_ORDER_FAILURE:
    case CANCEL_ORDER_FAILURE:
    case DELIVERED_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case DELETE_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
