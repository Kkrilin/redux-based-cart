import { createSlice } from "@reduxjs/toolkit";

const cartState = {
  cartVisible: false,
  notification: null,
};

const cartSlice = createSlice({
  name: "cartVisibilty",
  initialState: cartState,
  reducers: {
    showCart(state) {
      state.cartVisible = !state.cartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
