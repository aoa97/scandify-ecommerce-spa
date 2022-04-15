import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducers from "./reducers/rootReducer";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
