import React from "react";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import { AddCartButton } from "../AddCartButton/AddCartButton";
import { useFetch } from "../../Hooks/useFetch";
import { Error } from "../Error/Error";

const Products = () => {
  const {
    data,
    error,
    loading
  } = useFetch(`https://fakestoreapi.com/products?limit=50`);


  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!!error) {
    return <Error error={error} />
  }


  return (
    <section>
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
              <AddCartButton price={product.price} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;

