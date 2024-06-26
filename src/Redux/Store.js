import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { productReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { ratingReducer } from "./RateAndReview/Reducer";
import { adminProductReducer } from "./Admin/Product/Reducer";
import { adminOrderReducer } from "./Admin/Order/Reducer";
import { adminReducer } from "./Admin/User/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
  rating: ratingReducer,
  adminProduct: adminProductReducer,
  adminOrder: adminOrderReducer,
  adminAction: adminReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
