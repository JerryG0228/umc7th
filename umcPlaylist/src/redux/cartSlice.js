import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../mock/cartItems";

const initialState = {
  cartItems: cartItems,
  totalAmount: cartItems.reduce((acc, cur) => acc + cur.amount, 0),
  totalPrice: cartItems.reduce((acc, cur) => acc + parseInt(cur.price), 0),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.totalAmount++;
      const item = state.cartItems.find((e) => e.id === action.payload);
      item.amount++;
      state.totalPrice += parseInt(item.price);
    },
    decrease: (state, action) => {
      state.totalAmount--;
      const item = state.cartItems.find((e) => e.id === action.payload);
      item.amount--;
      state.totalPrice -= parseInt(item.price);
      if (item.amount === 0) {
        state.cartItems = state.cartItems.filter((e) => e.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;
export const { increase, decrease, clearCart } = cartSlice.actions;
