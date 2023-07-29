import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { drawerReducer } from "./reducers/drawer";
import { productsReducer } from "./reducers/productsReducer";
import { productDetailReducer } from "./reducers/productDetail";
import { cartReducer } from "./reducers/cartReducer";
import { searchReducer } from "./reducers/search";

const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const initialState = {
  cart: { cartItems },
};

const rootReducer = combineReducers({
  drawer: drawerReducer,
  products: productsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  search: searchReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
