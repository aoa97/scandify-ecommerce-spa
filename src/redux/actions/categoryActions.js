import {
  CATEGORY_ACTIVE_UPDATE,
  CATEGORY_PRODUCTS_REQUEST,
  CATEGORY_PRODUCTS_RESPONSE,
  CATEGORY_PRODUCTS_FAIL,
  CATEGORY_PRODUCT_REQUEST,
  CATEGORY_PRODUCT_RESPONSE,
  CATEGORY_PRODUCT_FAIL,
} from "../contstants/categoryContstnts";

const url = "http://localhost:4000";

export const setActiveCategory = (category) => (dispatch, getState) => {
  dispatch({ type: CATEGORY_ACTIVE_UPDATE, payload: category });
};

export const getCategoryProducts = () => (dispatch, getState) => {
  dispatch({ type: CATEGORY_PRODUCTS_REQUEST });

  // GQL Query
  const query = `
  {
    category(input: { title: "${getState().categoryActive}"}) {
      products {
        id,
        name,
        brand,
        description,
        category,
        prices { currency { label, symbol }, amount },
        attributes { id, name, type, items { id, value, displayValue} },
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
        type: CATEGORY_PRODUCTS_RESPONSE,
        payload: res.data.category.products,
      })
    )
    .catch((e) => dispatch({ type: CATEGORY_PRODUCTS_FAIL, payload: e }));
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
      attributes { id, name, type, items { id, value, displayValue} },
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
