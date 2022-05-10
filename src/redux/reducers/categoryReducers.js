import {
  CATEGORY_ACTIVE_UPDATE,
  CATEGORY_PRODUCTS_REQUEST,
  CATEGORY_PRODUCTS_RESPONSE,
  CATEGORY_PRODUCTS_FAIL,
  CATEGORY_PRODUCT_REQUEST,
  CATEGORY_PRODUCT_RESPONSE,
  CATEGORY_PRODUCT_FAIL,
} from "../contstants/categoryContstnts";

export const categoryActiveReducer = (state = "all", action) => {
  switch (action.type) {
    case CATEGORY_ACTIVE_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export const categoryProductsReducer = (
  state = {
    products: [{ gallery: [], prices: [{ currency: {} }] }],
  },
  action
) => {
  switch (action.type) {
    case CATEGORY_PRODUCTS_REQUEST:
      return { loading: true, ...state };
    case CATEGORY_PRODUCTS_RESPONSE:
      return { loading: false, products: action.payload };
    case CATEGORY_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoryProductReducer = (
  state = {
    product: {
      gallery: [],
      prices: [{ currency: {} }],
      attributes: [{ items: [] }],
    },
  },
  action
) => {
  switch (action.type) {
    case CATEGORY_PRODUCT_REQUEST:
      return { loading: true, ...state };
    case CATEGORY_PRODUCT_RESPONSE:
      return { loading: false, product: action.payload };
    case CATEGORY_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
