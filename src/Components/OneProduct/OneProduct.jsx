import React, { useState } from 'react';
import style from './OneProduct.module.css'
import { AddCartButton } from "../AddCartButton/AddCartButton";

const OneProduct = ({ product }) => {

  const [countOfProduct, setCountOfProduct] = useState('');

  const handleCount = (event) => {
    const value = event.target.value;
    const count = value.replace(/[^\d]/g, '');
    setCountOfProduct(count);
  }


  return (
    <div className={style.wrapper}>
      <div>
        <img
          src={product.images}
          alt={product.title}
        />
      </div>
      <div className={style.textColumn}>
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <div className={style.addToCartWrapper}>
          <div className={style.buttonWrapper}>
            <AddCartButton
              price={product.price}
              countOfProduct={countOfProduct}
              setCountOfProduct={setCountOfProduct}
            />
          </div>
          <input
            className={style.countProduct}
            type='number'
            value={countOfProduct}
            onChange={handleCount}
          />
        </div>
      </div>
    </div>
  );
};

export default OneProduct;