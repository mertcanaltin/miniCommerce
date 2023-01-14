import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart-slice';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
  persistedState
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart
  });
});
export default store;