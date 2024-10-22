import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartCountReducer from './redux/cartCountSlice.js';


const loadstate = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    return serializedState ? JSON.parse(serializedState) : { items: [], totalQuantity: 0 };
  } catch (err) {
    return { items: [], totalQuantity: 0 };
  }
};

const initialState = loadstate();

const store = configureStore({
  reducer: {
    cartCount: cartCountReducer
  },
  preloadedState: {
    cartCount: initialState
  }
});

store.subscribe(() => {
  localStorage.setItem('cart', JSON.stringify(store.getState().cartCount));
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
