import { createContext, useState } from 'react';

export const AppContext = createContext(null);

const listOfUsers = { name: 'user', password: '1234user' };

export const AppProvider = ({ children }) => {

  const [isLogin, setIsLogin] = useState(false);
  const [price, setPrice] = useState(0);
  const [countOfProduct, setCountOfProduct] = useState(0);
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [user] = useState(listOfUsers);

  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        price,
        setPrice,
        countOfProduct,
        setCountOfProduct,
        isShowPopUp,
        setIsShowPopUp,
        user,
      }}
    >{children}</AppContext.Provider>
  )
}