import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"


import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products} />
      </Routes>

    </Router>
  );
}

export default App;
