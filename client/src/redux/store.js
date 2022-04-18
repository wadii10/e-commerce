import { createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
// import { productReducer } from "./reducers/reducerProduct";
// import { userReducer } from "./reducers/reducerUser";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "authType",
  storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  pReducer,
  compose(applyMiddleware(thunk), devtools)
);

const persistor = persistStore(store);

export { persistor, store };