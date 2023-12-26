import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin'
import Auth from './components/Auth/Auth'

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/admin" Component={Admin} />
        <Route path="/auth" Component={Auth} />
      </Routes>
    </Router>
  );
}

export default App;
