import { createContext, useState } from 'react';

export const AppContext = createContext(null);

const listOfUsers = [
  { name: 'user', password: '1234user', count: 0, price: 0 },
  { name: 'Ipolit', password: 'password', count: 0, price: 0 },
]

export const AppProvider = ({ children }) => {

  const [isLogin, setIsLogin] = useState(false);
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [users, setUser] = useState(listOfUsers);
  const [currentUser, setCurrentUser] = useState(``);



  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        isShowPopUp,
        setIsShowPopUp,
        users,
        setUser,
        currentUser,
        setCurrentUser,
      }}
    >{children}</AppContext.Provider>
  )
}