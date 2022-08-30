import { useSelector } from "react-redux";

export function GetTotalPrice() {
  const cart = useSelector(state => state.cart.products)
  const totalPrice = cart.reduce((a, b) => a + b.price * b.quantity, 0)
    .toFixed(1);

  return totalPrice;
}