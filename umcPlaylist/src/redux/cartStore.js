import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import modalReducer from "../modal/modalSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
