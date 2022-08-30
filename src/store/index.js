import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

const store = configureStore({
  reducer: rootReducer,
});

export default store;