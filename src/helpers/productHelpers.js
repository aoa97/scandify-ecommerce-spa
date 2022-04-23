export const calcPrice = (prices, activeCurrency, qty = "1") => {
  const { currency, amount } =
    prices.find((p) => p.currency.label === activeCurrency?.label) ?? prices[0];

  return `${(amount * qty).toFixed(2)}${currency.symbol}`;
};

export const calcTotalPrice = (cart, activeCurrency) => {
  const filCart = cart.map(({ prices, qty }) => ({
    price: prices.find((p) => p.currency.label === activeCurrency.label),
    qty,
  }));

  const result = filCart.reduce((a, x) => x.price.amount * x.qty + a, 0);

  return `${activeCurrency.symbol}${result.toFixed(2)}`;
};
