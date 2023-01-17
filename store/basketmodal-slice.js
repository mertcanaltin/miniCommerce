import { createSlice } from '@reduxjs/toolkit';

const basketModalSlice = createSlice({
  name: 'basketmodal',
  initialState: false,
  reducers: {
    isBasketModalOpen: (state, action) => {
      return action.payload
    }
  },
});

export const basketModalReducer = basketModalSlice.reducer;

export const {
  isBasketModalOpen
} = basketModalSlice.actions;
