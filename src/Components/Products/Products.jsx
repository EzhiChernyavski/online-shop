import React from "react";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import { AddCartButton } from "../AddCartButton/AddCartButton";

const Products = ({ data }) => {
  return (
    <div
      className={style.wrapper}
      key={data.id}
    >
      <div className={style.imgWrapper}>
        <img
          className={style.img}
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className={style.contentWrapper}>
        <Link to={`/product/${data.id}`}>
          <h2 className={style.title}>{data.title}</h2>
        </Link>
        <p>${data.price}</p>
        <div className={style.buttonWrapper}>
          <AddCartButton price={data.price} />
        </div>
      </div>
    </div>
  );
};

export default Products;