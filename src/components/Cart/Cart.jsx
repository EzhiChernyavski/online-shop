import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../store/selectors/cartSelector";
import style from './Cart.module.css'
import { AddItemButton } from "../AddItemButton/AddItemButton";
import RemoveItemButton from "../RemoveItemButton/RemoveItemButton";
import { GetTotalPrice } from "../../features/GetTotalPrice";
import { removeAllItems } from "../../store/reducers/cartReducer";


const Cart = () => {
  const cart = useSelector(cartSelector);
  const totalPrice = GetTotalPrice();
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(removeAllItems())
  }


  return (
    <div className={style.cartWrapper}>
      <h1>Shopping cart</h1>
      {cart.products.length === 0 ? <h2>Shopping cart empty</h2> :
        <div>
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total price</th>
              <th>Remove</th>
            </tr>
            </thead>
            <tbody>
            {cart.products.map(product => {
              return (
                <tr
                  className={style.wrapper}
                  key={product.id}
                >
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td className={style.addItemCell}>
                  <span>
                    {product.quantity}
                  </span>
                    <AddItemButton
                      className={style.button}
                      product={product}
                    >Add</AddItemButton>
                  </td>
                  <td>${product.allPrice}</td>
                  <td>
                    <RemoveItemButton
                      className={style.button}
                      product={product}
                    >Remove</RemoveItemButton>
                  </td>
                </tr>
              )
            })}
            <tr>
              <td
                colSpan='5'
                style={{ textAlign: 'right', paddingRight: '25px' }}
              >${totalPrice}</td>
            </tr>
            </tbody>
          </table>
          <div className={style.underTableButtons}>
            <button
              className={style.button}
              onClick={handleClearCart}
            >Clear cart
            </button>
            <button
              className={style.disabledButton}
              disabled
            >PAY
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Cart;