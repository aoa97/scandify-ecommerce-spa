import {
  CURRENCY_ACTIVE_UPDATE,
  CURRENCY_DATA_FAIL,
  CURRENCY_DATA_REQUEST,
  CURRENCY_DATA_RESPONSE,
} from "../contstants/currencyConstants";

export const currencyDataReducer = (state = { currencies: [] }, action) => {
  switch (action.type) {
    case CURRENCY_DATA_REQUEST:
      return { loading: true, ...state };
    case CURRENCY_DATA_RESPONSE:
      return {
        loading: false,
        currencies: action.payload,
        activeCurrency: action.payload[0],
      };
    case CURRENCY_DATA_FAIL:
      return { loading: false, error: action.payload };
    case CURRENCY_ACTIVE_UPDATE:
      return { ...state, activeCurrency: action.payload };
    default:
      return state;
  }
};
