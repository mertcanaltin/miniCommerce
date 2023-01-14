import { configureStore } from '@reduxjs/toolkit';
import { cartReducer,hydrate } from './cart-slice';
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

if(persistedState){
  store.dispatch(hydrate(persistedState))
}

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

export default store;