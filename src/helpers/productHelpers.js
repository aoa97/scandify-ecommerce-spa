export const calcPrice = (prices, activeCurrency, qty = "1") => {
  const { amount } =
    prices.find((p) => p.currency?.label === activeCurrency?.label) ??
    prices[0];

  return `${activeCurrency?.symbol}${(amount * qty).toFixed(2)}`;
};

export const calcTotalPrice = (cart, activeCurrency) => {
  const filCart = cart.map(({ prices, qty }) => ({
    price: prices.find((p) => p.currency?.label === activeCurrency?.label),
    qty,
  }));

  const totalPrice = filCart.reduce((a, x) => x.price?.amount * x.qty + a, 0);
  const totalQty = filCart.reduce((a, x) => x.qty + a, 0);

  return {
    totalQty,
    totalPrice: `${activeCurrency?.symbol}${(15 + totalPrice).toFixed(2)}`, // Tax $15 Included
  };
};
