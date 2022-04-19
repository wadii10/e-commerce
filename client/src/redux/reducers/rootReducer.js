import { combineReducers } from "redux";
import userReducer from "./reducerUser";
import productReducer from "./reducerProduct";
import cartReducer from "./reducerCart";

export default combineReducers({ userReducer, productReducer, cartReducer })