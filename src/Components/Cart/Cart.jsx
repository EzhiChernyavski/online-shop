import React, { useContext } from 'react';
import style from "../Cart/Cart.module.css";
import cartImg from "../../Icons/EmptyCart.svg";
import { AppContext } from "../../hoc/AppContext";
import { LoginButton } from "../LoginButton/LoginButton";
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  let price = 0;
  let count = 0;
  const { users, isLogin, setIsLogin, currentUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleOut = (event) => {
    event.preventDefault();
    if (isLogin) {
      setIsLogin(false);
      navigate('/');
    }
  }

  users.map(user => {
    if (user.name === currentUser) {
      price = user.price;
      count = user.count
    }
  })

  return (
    <div className={style.cart}>
      <img
        className={style.cartImg}
        src={cartImg}
        alt='cartImg'
      />
      <p>{count}</p>
      <p className={style.price}>${price}</p>
      <LoginButton handleClick={handleOut}>
        Log out
      </LoginButton>
    </div>
  );
};

