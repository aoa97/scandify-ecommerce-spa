import {
  CATEGORY_DATA_REQUEST,
  CATEGORY_DATA_RESPONSE,
  CATEGORY_DATA_FAIL,
  CATEGORY_PRODUCT_REQUEST,
  CATEGORY_PRODUCT_RESPONSE,
  CATEGORY_PRODUCT_FAIL,
} from "../contstants/categoryContstnts";

const url = "http://localhost:4000";

export const getCategoryData = (cat) => (dispatch, getState) => {
  dispatch({ type: CATEGORY_DATA_REQUEST });

  // GQL Query
  const query = `
  {
    currencies {
      label,
      symbol
    },
    category(input: { title: "${cat}"}) {
      name,
      products {
        id,
        name,
        brand,
        description,
        category,
        prices { currency { label, symbol }, amount },
        attributes { id, name, items { id, value, displayValue} },
        gallery,
        inStock
      } 
    }
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
        type: CATEGORY_DATA_RESPONSE,
        payload: {
          category: res.data.category,
          currencies: res.data.currencies,
        },
      })
    )
    .catch((e) => dispatch({ type: CATEGORY_DATA_FAIL, payload: e }));
};

export const getProductById = (id) => (dispatch, getState) => {
  dispatch({ type: CATEGORY_PRODUCT_REQUEST });

  // GQL Query
  const query = `
  {
    product(id: "${id}") {
      id,
      name,
      brand,
      description,
      category,
      prices { currency { label, symbol }, amount },
      attributes { name, items { id, value, displayValue} },
      gallery,
      inStock
    }
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
      dispatch({ type: CATEGORY_PRODUCT_RESPONSE, payload: res.data.product })
    )
    .catch((e) => dispatch({ type: CATEGORY_PRODUCT_FAIL, payload: e }));
};
