import {
  CART_ADD_ITEM,
  CART_UPDATE_QTY,
  CART_UPDATE_SELATTRIBUTES,
} from "../contstants/cartConstants";

export const cartReducer = (state = [{ selAttributes: {} }], action) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || []; // Current Cart

  // Sort items to avoid mess in the array
  const cartCompare = (a, b) => {
    if (a.cartId < b.cartId) return -1;
    else if (a.cartId > b.cartId) return 1;
    else return 0;
  };

  switch (action.type) {
    /* Add item to product */
    case CART_ADD_ITEM:
      const product = action.payload;

      const newCart = [...cart, product].sort(cartCompare);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;

    /* Update product Qunatity */
    case CART_UPDATE_QTY:
      const { cartId, qty } = action.payload;

      // In case of qty = 0 => delete item & return new cart
      if (qty <= 0) {
        const newCart = cart
          .filter((p) => p.cartId !== cartId)
          .sort(cartCompare);
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      }

      // Update Qty
      const item = cart.find((p) => p.cartId === cartId);
      item.qty = qty;
      const filteredCart = cart.filter((p) => p.cartId !== cartId);
      const updatedCart = [...filteredCart, item].sort(cartCompare);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    /* Update product selected attributes */
    case CART_UPDATE_SELATTRIBUTES:
      const { _cartId, selAttributes } = action.payload;

      // Update
      const _item = cart.find((p) => p.cartId === _cartId);
      if (_item) {
        _item.selAttributes = selAttributes;
        const _filteredCart = cart.filter((p) => p.cartId !== _cartId);
        const _updatedCart = [..._filteredCart, _item].sort(cartCompare);
        localStorage.setItem("cart", JSON.stringify(_updatedCart));
        return _updatedCart;
      }
    default:
      return state;
  }
};
