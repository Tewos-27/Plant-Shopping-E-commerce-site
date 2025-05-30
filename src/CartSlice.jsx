import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  // Define the name of the slice
  // This name is used to generate action types and the reducer name
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  // Define the reducers for the slice
  // Each reducer function will handle a specific action
  // and update the state accordingly
  reducers: {
    // Action to add an item to the cart
    // If the item already exists, increment its quantity
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    
    decrement: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity--;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.name === action.payload.name);
      if (index > -1) {
        state.totalCount -= state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    // Action to update the quantity of an item in the cart
    // If the item exists, update its quantity
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
         const itemToUpdate = state.items.find(item => item.name === name);
         if (itemToUpdate) {
           itemToUpdate.quantity = quantity;
         }
    },
  },
});

export const { addItem, removeItem, updateQuantity, decrement } = CartSlice.actions;

export default CartSlice.reducer;