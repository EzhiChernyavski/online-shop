import React, { useState } from 'react';
import style from './OneProduct.module.css'
import { AddCartButton } from "../AddCartButton/AddCartButton";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { Error } from "../Error/Error";

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
            <AddCartButton
              price={data.price}
              currentCountOfProduct={currentCountOfProduct}
              setCurrentCountOfProduct={setCurrentCountOfProduct}
            />
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
