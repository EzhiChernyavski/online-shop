import React, { useContext } from 'react';
import style from "../Cart/Cart.module.css";
import cartImg from "../../Icons/EmptyCart.svg";
import { AppContext } from "../../hoc/AppContext";
import { LoginButton } from "../LoginButton/LoginButton";
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { isLogin, setIsLogin, price, countOfProduct } = useContext(AppContext);
  const navigate = useNavigate();

  const handleOut = (event) => {
    event.preventDefault();
    if (isLogin) {
      setIsLogin(false);
      navigate('/');
    }
  }

  return (
    <div className={style.cart}>
      <img
        className={style.cartImg}
        src={cartImg}
        alt='cartImg'
      />
      <p>{countOfProduct}</p>
      <p className={style.price}>${price}</p>
      <LoginButton handleClick={handleOut}>
        Log out
      </LoginButton>
    </div>
  );
};

