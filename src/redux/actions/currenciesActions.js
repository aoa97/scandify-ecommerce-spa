import {
  CURRENCY_DATA_REQUEST,
  CURRENCY_DATA_RESPONSE,
  CURRENCY_DATA_FAIL,
  CURRENCY_ACTIVE_UPDATE,
} from "../contstants/currencyConstants";

const url = "http://localhost:4000";

export const getCurrencies = () => (dispatch, getState) => {
  dispatch({ type: CURRENCY_DATA_REQUEST });

  // GQL Query
  const query = `
  {
    currencies {
      label,
      symbol
    },
  }
  `;

  // Fetch
  fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: CURRENCY_DATA_RESPONSE,
        payload: res.data.currencies,
      })
    )
    .catch((e) => dispatch({ type: CURRENCY_DATA_FAIL, payload: e }));
};

export const setActiveCurrency = (currency) => (dispatch, getState) => {
  dispatch({ type: CURRENCY_ACTIVE_UPDATE, payload: currency });
};
