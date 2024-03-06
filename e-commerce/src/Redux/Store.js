import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { productReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import {orderReducer} from "./Order/Reducer"


const rootReducer=combineReducers({
    auth:authReducer,
    product:productReducer,
    cart:cartReducer,
    order:orderReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));