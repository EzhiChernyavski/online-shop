import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, getTotalSelector } from "../../store/selectors/cartSelector";
import style from './Cart.module.css'
import { removeAllItems } from "../../store/reducers/cartReducer";
import ItemInCartTable from "../ItemInCartTable/ItemInCartTable";


const Cart = () => {
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();
  const { totalPrice } = getTotalSelector(useSelector(cartSelector));

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
            <ItemInCartTable cart={cart} />
          </table>
          <div style={{ textAlign: 'right', marginRight: '25px', marginTop: '10px' }}>
            Total price: ${totalPrice}
          </div>
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