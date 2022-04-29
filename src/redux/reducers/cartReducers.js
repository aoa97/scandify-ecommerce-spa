import {
  CART_ADD_ITEM,
  CART_UPDATE_QTY,
  CART_UPDATE_SELATTRIBUTES,
} from "../contstants/cartConstants";

export const cartReducer = (state = [{ selAttributes: {} }], action) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || []; // Current Cart

  // Sort items to avoid mess in the array
  const cartCompare = (a, b) => {
    if (a.id < b.id) return -1;
    else if (a.id > b.id) return 1;
    else return 0;
  };

  switch (action.type) {
    /* Add item to product */
    case CART_ADD_ITEM:
      const product = action.payload;

      // Check if prodct exists
      const exist = cart.find((p) => p.id === action.payload.id);

      if (exist) {
        const fill = cart.filter((p) => p.id !== exist.id);
        const newCart = [...fill, product];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      }

      // If not exist, append it to cart
      const newCart = [...cart, product].sort(cartCompare);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;

    /* Update product Qunatity */
    case CART_UPDATE_QTY:
      const { id, qty } = action.payload;

      // In case of qty = 0 => delete item & return new cart
      if (qty <= 0) {
        const newCart = cart.filter((p) => p.id !== id).sort(cartCompare);
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      }

      // Update Qty
      const item = cart.find((p) => p.id === id);
      item.qty = qty;
      const filteredCart = cart.filter((p) => p.id !== id);
      const updatedCart = [...filteredCart, item].sort(cartCompare);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    /* Update product selected attributes */
    case CART_UPDATE_SELATTRIBUTES:
      const { id2, selAttributes } = action.payload;

      // Update
      const item2 = cart.find((p) => p.id === id2);
      if (item2) {
        item2.selAttributes = selAttributes;
        const filteredCart2 = cart.filter((p) => p.id !== id2);
        const updatedCart2 = [...filteredCart2, item2].sort(cartCompare);
        localStorage.setItem("cart", JSON.stringify(updatedCart2));
        return updatedCart2;
      }
    default:
      return state;
  }
};
