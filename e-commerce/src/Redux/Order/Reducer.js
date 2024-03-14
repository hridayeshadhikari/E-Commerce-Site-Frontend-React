import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS } from "./ActionType"

const initialState = {
    order: null,
    orders: [],
    error: null,
    loading: false
}

export const orderReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_ORDER_REQUEST:
        case GET_ORDER_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case CREATE_ORDER_SUCCESS:
            return { ...state, order: action.payload, error: null, success: true, loading: false }

        case GET_ORDER_BY_ID_SUCCESS:
            return { ...state, order: action.payload, loading: false, error: null }

        case GET_ORDER_BY_ID_FAILURE:
            return { ...state, loading: false, error: action.payload }

        case CREATE_ORDER_FAILURE:
            return { ...state, error: action.payload, loading: false }

        case GET_ORDER_HISTORY_REQUEST:
            return {
                loading: true,
                orders: [],
            };
        case GET_ORDER_HISTORY_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
            };
        case GET_ORDER_HISTORY_FAILURE:
            return {
                loading: false,
                error: action.payload,
                orders: [],
            };

        default:
            return state;
    }

}