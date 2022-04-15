import { CART_ADD_ITEM, CART_UPDATE_QTY } from "../contstants/cartConstants";

export const addToCart = (id) => (dispatch, getState) => {
  const item = getState().categoryData.category.products.find(
    (p) => p.id === id
  );

  dispatch({ type: CART_ADD_ITEM, payload: item });
};

export const updateQty = (item) => (dispatch, getState) => {
  dispatch({ type: CART_UPDATE_QTY, payload: item });
};
