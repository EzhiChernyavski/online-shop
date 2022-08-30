import React, { useState } from 'react';
import style from './OneProduct.module.css'
import { AddItemButton } from "../AddItemButton/AddItemButton";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Error } from "../Error/Error";
import cartImgWhite from "../../icons/EmptyCart-white.svg";

const OneProduct = () => {
  const { id } = useParams();
  const [currentCountOfProduct, setCurrentCountOfProduct] = useState(``);
  const { data, error, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <Error error={error} />
  }

  //------------------------------

  const handleCount = (event) => {
    const value = event.target.value;
    const count = value.replace(/[^\d]/g, '');
    setCurrentCountOfProduct(count);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.imgColumn}>
        <img
          className={style.img}
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className={style.textColumn}>
        <h1>{data.title}</h1>
        <p>${data.price}</p>
        <p>{data.description}</p>
        <div className={style.addToCartWrapper}>
          <div className={style.buttonWrapper}>
            <AddItemButton
              product={data}
              className={style.addButton}
              currentCountOfProduct={currentCountOfProduct}
              setCurrentCountOfProduct={setCurrentCountOfProduct}
            >
              <img
                src={cartImgWhite}
                alt='cartImgWhite'
                className={style.cart}
              />
            </AddItemButton>
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
