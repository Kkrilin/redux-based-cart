import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import itemReducer from "./item-slice";

const store = configureStore({
  reducer: { item: itemReducer, cart: cartReducer },
});

export default store;
