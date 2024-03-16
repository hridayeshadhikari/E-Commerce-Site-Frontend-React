import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { productReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import {orderReducer} from "./Order/Reducer"
import { ratingReducer } from "./RateAndReview/Reducer";


const rootReducer=combineReducers({
    auth:authReducer,
    products:productReducer,
    cart:cartReducer,
    order:orderReducer,
    rating:ratingReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));