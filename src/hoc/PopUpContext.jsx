import { createContext, useState } from 'react';

export const PopUpContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  return (
    <PopUpContext.Provider
      value={{
        isShowPopUp,
        setIsShowPopUp,
      }}
    >{children}</PopUpContext.Provider>
  )
}