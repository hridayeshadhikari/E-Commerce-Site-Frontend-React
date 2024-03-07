import { FIND_PRODUCT_BY_CATEGORY_REQUEST, FIND_PRODUCT_BY_CATEGORY_FAILURE, FIND_PRODUCT_BY_CATEGORY_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType"

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCT_BY_ID_REQUEST:
        case FIND_PRODUCT_BY_CATEGORY_REQUEST:
            return { ...state, loading: true, error: null ,products:[]}

        case FIND_PRODUCT_BY_CATEGORY_SUCCESS:
            return { ...state, loading: false, products:action.payload }

        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, loading: false, product: action.payload }

        case FIND_PRODUCT_BY_ID_FAILURE:
            return {...state,loading:true,error:action.payload}
        case FIND_PRODUCT_BY_CATEGORY_FAILURE:
            
            return {...state,loading:false,products:[],error:action.payload}

        default:
            return state;
    }
}