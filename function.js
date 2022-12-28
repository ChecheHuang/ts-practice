module.export= function timesTwo(a) {
  return a * 2
}
module.export = function order(items) {
  const total = items.reduce((price, item) => price + item.price, 0);
  return {
    orderItems: items,
    total,
  };
};
