import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //   state.items.push(action.payload);
      const product = action.payload;
      const existing = state.items.find(
        (item) => item.product.id === product.id
      );
      if (existing) {
        existing.quantity += product.quantity;
      } else {
        state.items.push({ product, quantity: product.quantity });
      }
    },
    removeFromCart: (state, action) => {
      //   state.items.pop();
      const productId = action.payload;
      state.items = state.items.filter((item) => item.product.id !== productId);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
