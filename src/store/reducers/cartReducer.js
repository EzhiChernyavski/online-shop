import { createSlice, current } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (action.payload.currentCountOfProduct) {
        state.products.push({
          id: action.payload.product.id,
          title: action.payload.product.title,
          price: action.payload.product.price,
          quantity: Number(action.payload.currentCountOfProduct),
          allPrice: (action.payload.product.price * Number(action.payload.currentCountOfProduct))
            .toFixed(1),
        })
        console.log(`2`);
      } else {
        state.products.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          allPrice: action.payload.price,
        })
        console.log(`1`);
      }
    },

    incrementQuantity: (state, action) => {
      if (action.payload.hasOwnProperty(`currentCountOfProduct`)) {
        const product = state.products.find((item) => item.id === action.payload.product.id);
        product.quantity += Number(action.payload.currentCountOfProduct);
        console.log(`4`);
      } else {
        const product = state.products.find((item) => item.id === action.payload.id);
        product.quantity++;
        product.allPrice = (product.price * product.quantity).toFixed(1);
        console.log(`3`);
      }
    },

    decrementQuantity: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload.id);
      product.quantity === 1 ? product.quantity = 1 : product.quantity--;
      console.log(current(state));
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