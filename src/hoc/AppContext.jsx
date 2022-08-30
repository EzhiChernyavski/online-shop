import { createContext, useState } from 'react';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isShowPopUp,
        setIsShowPopUp,
      }}
    >{children}</AppContext.Provider>
  )
}