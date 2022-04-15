import {
  CATEGORY_DATA_REQUEST,
  CATEGORY_DATA_RESPONSE,
  CATEGORY_DATA_FAIL,
  CATEGORY_PRODUCT_REQUEST,
  CATEGORY_PRODUCT_RESPONSE,
  CATEGORY_PRODUCT_FAIL,
} from "../contstants/categoryContstnts";

export const categoryDataReducer = (
  state = {
    category: {
      name: "",
      products: [{ gallery: [], prices: [{ currency: {} }] }],
    },
  },
  action
) => {
  switch (action.type) {
    case CATEGORY_DATA_REQUEST:
      return { loading: true, ...state };
    case CATEGORY_DATA_RESPONSE:
      return { loading: false, category: action.payload.category };
    case CATEGORY_DATA_FAIL:
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



