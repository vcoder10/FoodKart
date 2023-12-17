import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // name initialstate reducer
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    //action
    addItem: (state, action) => {
      // mutating the state
      //console.log("added");
      state.items.push(action.payload);
      state.totalPrice += action.payload.itemPrice;
    },
    removeItem: (state, action) => {
      const removedItem = state.items.find(
        (item) => item.itemId === action.payload
      );
      state.items = state.items.filter(
        (item) => item.itemId !== action.payload
      );
      state.totalPrice -= removedItem.itemPrice;
    },
    clearCart: (state) => {
      state.items.length = 0; // why not state=[]
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
