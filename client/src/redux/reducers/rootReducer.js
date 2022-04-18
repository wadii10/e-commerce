import { combineReducers } from "redux";
import userReducer from "./reducerUser";
import productReducer from "./reducerProduct";

export default combineReducers({ userReducer, productReducer });