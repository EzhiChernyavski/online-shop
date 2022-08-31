import React, { useState } from 'react';
import style from './OneProduct.module.css'
import { IncrementItemButton } from "../IncrementItemButton/IncrementItemButton";
import cartImgWhite from "../../icons/EmptyCart-white.svg";

const OneProduct = ({ product }) => {
  const [currentCountOfProduct, setCurrentCountOfProduct] = useState('');

  const handleCount = (event) => {
    const value = event.target.value;
    const count = value.replace(/[^\d]/g, '');
    if (value < 0) {
      return
    }
    setCurrentCountOfProduct(count);
  }


  return (
    <div className={style.wrapper}>
      <div className={style.imgColumn}>
        <img
          className={style.img}
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className={style.textColumn}>
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <div className={style.addToCartWrapper}>
          <div className={style.buttonWrapper}>
            <IncrementItemButton
              product={product}
              className={style.addButton}
              currentCountOfProduct={currentCountOfProduct}
              setCurrentCountOfProduct={setCurrentCountOfProduct}
            >
              <img
                src={cartImgWhite}
                alt='cartImgWhite'
                className={style.cart}
              />
            </IncrementItemButton>
          </div>
          <input
            className={style.countProduct}
            type='number'
            value={currentCountOfProduct}
            onChange={handleCount}
          />
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
