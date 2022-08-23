import React from "react";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import { AddCartButton } from "../AddCartButton/AddCartButton";

const Products = ({ data }) => {
  return (
    <div className={style.wrapper} key={data.id} >
      <img src={data.images[0]} alt={data.title}/>
      <Link to={`/product/${data.id}`}>
        <h2 className={style.title}>{data.title}</h2>
      </Link>
      <p>${data.price}</p>
      <div className={style.buttonWrapper}>
        <AddCartButton price={data.price} />
      </div>
    </div>
  );
};

export default Products;