import React from "react";
import style from "./Products.module.css";
import { Link } from "react-router-dom";
import { IncrementItemButton } from "../IncrementItemButton/IncrementItemButton";
import cartImgWhite from "../../icons/EmptyCart-white.svg";

const Products = ({ data, addMoreProduct, countItem }) => {
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
                <IncrementItemButton
                  className={style.addButton}
                  product={product}
                >
                  <img
                    src={cartImgWhite}
                    alt='cartImgWhite'
                    className={style.cart}
                  />
                </IncrementItemButton>
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

