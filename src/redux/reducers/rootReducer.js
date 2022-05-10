import { combineReducers } from "redux";
import {
  categoryActiveReducer,
  categoryProductsReducer,
  categoryProductReducer,
} from "./categoryReducers";
import { cartReducer } from "./cartReducers";
import { currencyDataReducer } from "./currencyReducers";

const reducers = combineReducers({
  // Categories
  categoryActive: categoryActiveReducer,
  categoryProducts: categoryProductsReducer,
  categoryProduct: categoryProductReducer,
  // Currencies
  currencyData: currencyDataReducer,
  // Cart
  cart: cartReducer,
});

export default reducers;
