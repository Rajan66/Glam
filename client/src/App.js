import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

import Home from './components/Home/Home';
import Admin from './components/Admin/Admin'
import Auth from './components/Auth/Auth'
import ProductDetails from './components/ProductDetails/ProductDetails';
import AllProducts from './components/Products/AllProducts';
import Checkout from './components/Checkout/Checkout'
import About from './components/About/About'

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/admin" Component={Admin} />
          <Route path="/auth" Component={Auth} />
          <Route path="/product/:id" Component={ProductDetails} />
          <Route path="/products/" Component={AllProducts} />
          <Route path="/checkout/" Component={Checkout} />
        </Routes>
      </Router>
      <div>
      </div>
    </>
  );
}


export default App;
