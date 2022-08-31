export const cartSelector = (store) => store.cart;

export const getTotalSelector = (store) => {

  const totalPrice = store.products.reduce((a, b) => a + b.price * b.quantity, 0)
    .toFixed(1);
  const totalQuantity = store.products.reduce((a, b) => a + b.quantity, 0);

  return {totalQuantity, totalPrice}
}