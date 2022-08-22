import { createContext, useState } from 'react';

export const AppContext = createContext(null);

const listOfUsers = [
  { name: 'user', password: '1234user', count: 0, price: 0 },
  { name: 'Yuri', password: 'password', count: 0, price: 0 },
]

export const AppProvider = ({ children }) => {

  // const [price, setPrice] = useState(0);
  // const [countOfProducts, setCountOfProducts] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [users, setUser] = useState(listOfUsers);
  const [currentUser, setCurrentUser] = useState(``)

  // const setAllPrice2 = (value, count) => {
  //   if (count > 1) {
  //     setCountOfProducts(prevState => prevState + Number(count))
  //     setPrice(prevState => prevState + (value * count));
  //   } else {
  //     setCountOfProducts(prevState => prevState + 1);
  //     setPrice(prevState => prevState + value);
  //   }
  // };

  const setAllPrice = (value, count, currentUser) => {
    if (count > 1) {
      setUser(
        users.map((user) => {
          return user.name === currentUser ? {
            ...user,
            count: user.count + Number(count),
            price: user.count + (value * count)
          } : user
        })
      )
    } else {
      setUser(
        users.map((user) => {
          return user.name === currentUser ? {
            ...user,
            count: user.count + 1,
            price: user.price + value
          } : user
        })
      )
    }
  }

  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        isShowPopUp,
        setIsShowPopUp,
        users,
        currentUser,
        setCurrentUser,
        setAllPrice,
        // price,
        // countOfProducts,
      }}
    >{children}</AppContext.Provider>
  )
}