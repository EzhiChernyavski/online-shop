import { createContext, useState } from 'react';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {

  const [price, setPrice] = useState(0);
  const [countOfProducts, setCountOfProducts] = useState(0)
  const setAllPrice = (value, count) => {
    if (count > 1) {
      setCountOfProducts(prevState => prevState + Number(count))
      setPrice(prevState => prevState + (value * count));
    } else {
      setCountOfProducts(prevState => prevState + 1);
      setPrice(prevState => prevState + value);
    }
  };


  return (
    <AppContext.Provider
      value={{
        price,
        countOfProducts,
        setAllPrice,
      }}
    >{children}</AppContext.Provider>
  )
}