import { useSelector } from "react-redux";

export function GetTotalQuantity() {
  const cart = useSelector(store => store.cart.products)
  const totalQuantity = cart.reduce((a, b) => a + b.quantity, 0);

  return totalQuantity;
}
