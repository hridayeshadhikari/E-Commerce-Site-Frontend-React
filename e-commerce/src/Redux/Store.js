import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { productReducer } from "./Product/Reducer";

const rootReducer=combineReducers({
    auth:authReducer,
    product:productReducer,
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));