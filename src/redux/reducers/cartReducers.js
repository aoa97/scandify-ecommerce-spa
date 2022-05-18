import {
  CART_ADD_ITEM,
  CART_UPDATE_QTY,
  CART_UPDATE_SELATTRIBUTES,
} from "../contstants/cartConstants";

// Compare 2 objects
const isEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

export const cartReducer = (state = [{ selAttributes: {} }], action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.find((x) => x.id === item.id && isEqual(x.selAttributes, item.selAttributes));

      if (existItem) {
        existItem.qty += item.qty;
        localStorage.setItem("cart", JSON.stringify(state));
        return [...state];
      } else {
        const newCart = [...state, item];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      }
    case CART_UPDATE_QTY:
      const { cartId, qty } = action.payload;
      const product = state.find((x) => x.cartId === cartId);

      if (qty < 1) {
        const updatedCart = state.filter((x) => x.cartId !== cartId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        product.qty = qty;
        localStorage.setItem("cart", JSON.stringify(state));
        return [...state];
      }
    case CART_UPDATE_SELATTRIBUTES:
      const { cartId: _cartId, selAttributes } = action.payload;
      const _product = state.find((x) => x.cartId === _cartId);
      _product.selAttributes = selAttributes;
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
