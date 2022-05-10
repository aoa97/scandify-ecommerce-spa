import {
  CART_ADD_ITEM,
  CART_UPDATE_QTY,
  CART_UPDATE_SELATTRIBUTES,
} from "../contstants/cartConstants";

export const addToCart = (product, selAttributes, qty = 1) => (dispatch, getState) => {
  const cartId = Date.now(); // UID for cart items to avoid overwriting
  dispatch({ type: CART_ADD_ITEM, payload: { ...product, cartId, qty, selAttributes } });
};

export const updateQty = (item) => (dispatch, getState) => {
  dispatch({ type: CART_UPDATE_QTY, payload: item });
};

export const updateSelAttributes = (item) => (dispatch, getState) => {
  dispatch({ type: CART_UPDATE_SELATTRIBUTES, payload: item });
};
