import { CART_ADD_ITEM, CART_UPDATE_QTY } from "../contstants/cartConstants";

export const cartReducer = (state = [], action) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || []; // Current Cart

  // Sort items to avoid mess in the array
  const cartCompare = (a, b) => {
    if (a.id < b.id) return -1;
    else if (a.id > b.id) return 1;
    else return 0;
  };

  switch (action.type) {
    case CART_ADD_ITEM:
      const product = { qty: 1, ...action.payload };

      // Check if prodct exists
      const exist = cart.find((p) => p.id === action.payload.id);

      if (exist) {
        return state;
      }

      // If not exist, append it to cart
      const newCart = [...cart, product].sort(cartCompare);
      localStorage.setItem("cart", JSON.stringify(newCart));

      return newCart;
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
    default:
      return state;
  }
};
