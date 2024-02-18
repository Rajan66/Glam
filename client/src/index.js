import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, compose } from 'redux';
import './config/firebase-config'

import SidebarProvider from './components/Sidebar/SidebarContext';
import CartProvider from './components/Cart/CartContext';

import reducers from './reducers'
import { thunk } from 'redux-thunk'


const store = createStore(reducers, compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <SidebarProvider>
    <CartProvider>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </CartProvider>
  </SidebarProvider>
);
