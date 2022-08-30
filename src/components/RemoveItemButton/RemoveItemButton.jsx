import React from 'react';
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/reducers/cartReducer";

const RemoveItemButton = ({product, className, children}) => {
  const dispatch = useDispatch();
  // const cart = useSelector(cartSelector);

  const handleRemoveItem = () => {
    dispatch(removeItem(product))
  }

  return (
    <button
      className={className}
      onClick={handleRemoveItem}
    >
      {children}
    </button>
  );
};

export default RemoveItemButton;