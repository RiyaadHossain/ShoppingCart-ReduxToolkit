import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import notifySlice from "./notifySlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    notify: notifySlice,
  },
});

export default store;
