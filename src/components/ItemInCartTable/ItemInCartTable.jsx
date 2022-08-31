import React from 'react';
import { IncrementItemButton } from "../IncrementItemButton/IncrementItemButton";
import RemoveItemButton from "../RemoveItemButton/RemoveItemButton";
import style from './ItemInCartTable.module.css'
import { DecrementItemButton } from "../DecrementItemButton/DecrementItemButton";

const ItemInCartTable = ({ cart }) => {
  return (
    <tbody>
    {cart.products.map(product => {
      return (
        <tr
          key={product.id}
        >
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>${product.price}</td>
          <td>
            <span>
              {product.quantity}
            </span>
            <IncrementItemButton
              className={style.button}
              product={product}
            >▲</IncrementItemButton>
            <DecrementItemButton
              className={style.button}
              product={product}
            >
              ▼
            </DecrementItemButton>
          </td>
          <td>${product.allPrice}</td>
          <td>
            <RemoveItemButton
              className={style.buttonRemove}
              product={product}
            >Remove</RemoveItemButton>
          </td>
        </tr>
      )
    })}
    </tbody>
  );
};

export default ItemInCartTable;