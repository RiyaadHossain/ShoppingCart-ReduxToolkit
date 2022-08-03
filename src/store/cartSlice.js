import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
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
    },
    removeFromCart(state, actions) {},
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
