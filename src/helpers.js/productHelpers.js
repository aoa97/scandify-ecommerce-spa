export const handlePrice = (prices, activeCurrency) => {
  const { currency, amount } =
    prices.find((p) => p.currency.label === activeCurrency?.label) ?? prices[0];

  return {
    amount,
    symbol: currency.symbol,
  };
};

export const handleTotalPrice = (cart, activeCurrency) => {
  const result = cart
    .map((p) => p.prices.find((p) => p.currency.label === activeCurrency.label))
    .reduce((a, x) => a + x.amount, 0);
    return `${activeCurrency.symbol}${result.toFixed(2)}`
};
