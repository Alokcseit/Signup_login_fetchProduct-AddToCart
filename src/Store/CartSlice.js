import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

let cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removetocart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increase: (state, action) => {
      const { id } = action.payload;
      const itemToUpdate = state.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      }
    },
    decrease: (state, action) => {
      const { id } = action.payload;
      const itemToUpdate = state.find((item) => item.id === id);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;
      }
    },
  },
});

export const { addtocart, removetocart, increase, decrease } =
  cartslice.actions;
export default cartslice.reducer;
