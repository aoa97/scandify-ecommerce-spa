import {
  CART_ADD_ITEM,
  CART_UPDATE_QTY,
  CART_UPDATE_SELATTRIBUTES,
} from "../contstants/cartConstants";

export const addToCart = (id, selAttributes) => (dispatch, getState) => {
  const item = getState().categoryData.category.products.find(
    (p) => p.id === id
  );

  dispatch({ type: CART_ADD_ITEM, payload: { ...item, selAttributes } });
};

export const updateQty = (item) => (dispatch, getState) => {
  dispatch({ type: CART_UPDATE_QTY, payload: item });
};

export const updateSelAttributes = (item) => (dispatch, getState) => {
  dispatch({ type: CART_UPDATE_SELATTRIBUTES, payload: item });
};
