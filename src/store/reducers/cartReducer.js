import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.products.push({
        id: payload.id,
        title: payload.title,
        price: payload.price,
        quantity: payload.currentCountOfProduct ? Number(payload.currentCountOfProduct) : 1,
        allPrice: (payload.price * (payload.currentCountOfProduct ? Number(payload.currentCountOfProduct) : 1))
          .toFixed(2),
      })
    },

    incrementQuantity: (state, { payload }) => {
      const product = state.products.find((item) => item.id === payload.id);
      product.quantity = payload.currentCountOfProduct ? (
        product.quantity += Number(payload.currentCountOfProduct)
      ) : (
        ++product.quantity
      );
      product.allPrice = (product.price * product.quantity).toFixed(1);
    },

    decrementQuantity: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload.id);
      product.quantity === 1 ? product.quantity = 1 : product.quantity--;
      product.allPrice = (product.price * product.quantity).toFixed(1);
    },

    removeItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id);
    },

    removeAllItems: (state) => {
      state.products.length = 0;
    },
  }
})

export default cartReducer.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAllItems
} = cartReducer.actions