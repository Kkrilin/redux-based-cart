import { createSlice } from "@reduxjs/toolkit";

let initialItemState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const itemSlice = createSlice({
  name: "items",
  initialState: initialItemState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.totalQuantity++;
      state.changed = true;
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalprice =
          existingItem.totalprice + action.payload.totalprice;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalprice = existingItem.totalprice - existingItem.price;
      }
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice.reducer;
