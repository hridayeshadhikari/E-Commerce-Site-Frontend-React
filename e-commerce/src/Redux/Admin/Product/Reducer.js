import { CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS } from "./ActionType";

const initialState={
    loading:false,
    error:null,
    products:[]
}

export const adminProductReducer=(state=initialState,action)=>{
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case DELETE_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                deletedProduct: action.payload
            }

        case DELETE_PRODUCT_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case CREATE_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case CREATE_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                products:action.payload
            }
    
        default:
            return state;
    }
}