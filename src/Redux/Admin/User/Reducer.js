import {
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: false,
  error: null,
  users: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return {
        ...state,
        loading: false,
        error: null,
      };

    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload,
      };

    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
