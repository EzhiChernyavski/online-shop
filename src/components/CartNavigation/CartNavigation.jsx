import React from 'react';
import style from ".//CartNavigation.module.css";
import cartImg from "../../icons/EmptyCart.svg";
import { LoginButton } from "../LoginButton/LoginButton";
import { NavLink, useNavigate } from 'react-router-dom';import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/userSelector";
import { changeLogin } from "../../store/reducers/userReducer";
import { cartSelector, getTotalSelector } from "../../store/selectors/cartSelector";

export const CartNavigation = () => {
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const {totalQuantity, totalPrice} = getTotalSelector(useSelector(cartSelector));

  const handleOut = (event) => {
    event.preventDefault();
    if (user.isLogin) {
      dispatch(changeLogin());
      navigate('/');
    }
  }

  return (
    <div className={style.cart}>
      <NavLink
        className={(el) => el.isActive ? style.active : style.link}
        to={`/cart`}
      >
        <img
          className={style.cartImg}
          src={cartImg}
          alt='cartImg'
        />
        {totalQuantity}
      </NavLink>
      <p className={style.price}>${totalPrice}</p>
      <LoginButton handleClick={handleOut}>
        Log out
      </LoginButton>
    </div>
  );
};

