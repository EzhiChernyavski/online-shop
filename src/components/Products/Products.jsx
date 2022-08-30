import React, { useState } from "react";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import { AddItemButton } from "../AddItemButton/AddItemButton";
import { useFetch } from "../../hooks/useFetch";
import { Error } from "../Error/Error";
import cartImgWhite from "../../icons/EmptyCart-white.svg";

const Products = () => {
  const [countItem, setCountItem] = useState(10);
  const {
    data,
    error,
    loading
  } = useFetch(`https://fakestoreapi.com/products?limit=${countItem}`);

  const addMoreProduct = () => {
    setCountItem(countItem + 5)
  }

  if (loading) {
    return <h1>Loading...</h1>

  }
  if (!!error) {
    return <Error error={error} />

  }

  //------------------------------------

  return (
    <section>
      <div className={style.productsWrapper}>
        {data.map(product => (
          <div
            className={style.wrapper}
            key={product.id}
          >
            <div className={style.imgWrapper}>
              <img
                className={style.img}
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className={style.contentWrapper}>
              <Link to={`/product/${product.id}`}>
                <h2 className={style.title}>{product.title}</h2>
              </Link>
              <p>${product.price}</p>
              <div className={style.buttonWrapper}>
                <AddItemButton
                  className={style.addButton}
                  product={product}
                >
                  <img
                    src={cartImgWhite}
                    alt='cartImgWhite'
                    className={style.cart}
                  />
                </AddItemButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {
          countItem !== 20 ? (
            <button
              className={style.addMoreItem}
              onClick={addMoreProduct}
            >More products</button>
          ) : (
            <button
              disabled
              className={style.disabledAddMoreItem}
            >More products</button>
          )
        }
      </div>
    </section>
  );
};

export default Products;

