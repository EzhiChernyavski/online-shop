import React, { useContext, useState } from 'react';
import style from './LoginForm.module.css'
import { LoginButton } from "../LoginButton/LoginButton";
import { AppContext } from "../../hoc/AppContext";
import close from '../../icons/close.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/userSelector";
import { changeLogin } from "../../store/reducers/userReducer";


export const LoginForm = () => {

  const { isShowPopUp, setIsShowPopUp } = useContext(AppContext);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    password: '',
  })
  const [isFormValid, setValidForm] = useState(true);
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();


  const handleClosePopUp = (event) => {
    event.preventDefault()
    if (isShowPopUp) {
      setIsShowPopUp(false);
    }

  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setCurrentUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentUser.name === user.name && currentUser.password === user.password) {
      dispatch(changeLogin(currentUser))
      setIsShowPopUp(false);
      navigate(`/`);
    } else {
      setValidForm(false)
    }
  }

  return (
    <div className={style.formWrapper}>
      <h3 className={style.formTitle}>To add item to the cart, log in</h3>
      <form
        onSubmit={handleSubmit}
        method='post'
      >
        <input
          className={style.field}
          name='name'
          type='text'
          placeholder='Name'
          required
          value={currentUser.name}
          onChange={handleInput}
        />
        <input
          className={style.field}
          name='password'
          type='password'
          placeholder='Password'
          required
          value={currentUser.password}
          onChange={handleInput}
        />
        {isFormValid || <div style={{ color: 'red' }}>The name or password is incorrect</div>}
        <div className={style.buttonWrapper}>
          <LoginButton handleClick={handleSubmit}>Enter</LoginButton>
          <LoginButton handleClick={handleClosePopUp}>Cancel</LoginButton>
        </div>
        <img
          onClick={handleClosePopUp}
          className={style.close}
          src={close}
          alt='close'
        />
      </form>
    </div>
  );
};

