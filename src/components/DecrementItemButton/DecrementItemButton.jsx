import { useDispatch } from "react-redux";
import { decrementQuantity } from "../../store/reducers/cartReducer";

export const DecrementItemButton = ({ product, className, children }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(decrementQuantity(product))
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