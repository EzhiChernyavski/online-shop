import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: 'user',
  initialState: {
    name: 'user',
    password: '1234user',
    isLogin: false,
  },
  reducers: {
    changeLogin: (state) => {
      !state.isLogin ? state.isLogin = true : state.isLogin = false;
    }
  }
})

export default userReducer.reducer;
export const { changeLogin } = userReducer.actions