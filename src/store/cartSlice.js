import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    showCart: false,
    isChanged: false
  },
  reducers: {
    /* 1. Add to Cart */
    addToCart(state, actions) {
      const { id, name, price } = actions.payload;
      const existItem = state.cartItems.find((item) => item.id === id);

      if (existItem) {
        existItem.quantity++;
        existItem.totalPrice += existItem.price;
      } else {
        state.cartItems.push({
          id,
          name,
          price,
          quantity: 1,
          totalPrice: price,
        });
        state.totalQuantity++;
      }
      state.isChanged = true
    },

    /* 2. Remove From Cart */
    removeFromCart(state, actions) {
      const id = actions.payload;

      const existItem = state.cartItems.find((item) => item.id === id);

      if (existItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existItem.quantity--;
        existItem.totalPrice -= existItem.price;
      }
      state.isChanged = true
    },

    /* 3. Show The Cart */
    showCart(state) {
      state.showCart = !state.showCart;
    },

    /* 4. Show the Stored Data */
    replaceData(state, actions) {
      state.cartItems = actions.payload;
      state.totalQuantity = actions.payload.length;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
