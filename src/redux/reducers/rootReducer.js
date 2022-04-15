import { combineReducers } from "redux";
import {
  categoryDataReducer,
  categoryProductReducer,
} from "./categoryReducers";
import { cartReducer } from "./cartReducers";
import { currencyDataReducer } from './currencyReducers';

const reducers = combineReducers({
  // Categories
  categoryData: categoryDataReducer,
  categoryProduct: categoryProductReducer,
  // Currencies
  currencyData: currencyDataReducer,
  // Cart
  cart: cartReducer,
});

export default reducers;
