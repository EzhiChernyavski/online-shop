import React from 'react';
import style from './LoginButton.module.css'

export const LoginButton = ({ handleClick, children }) => {
  return (
    <>
      <button
        className={style.login}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};