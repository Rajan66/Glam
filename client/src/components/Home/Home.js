import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Products from '../Products/Products';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


import { getProducts } from '../../actions/products';
import Sidebar from '../Sidebar/Sidebar';


const Home = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(0);

  
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartSize = cartItems.length;

  console.log(cartItems)

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Header/>
      {/* <Card products={products} /> */}
      <Sidebar />
      <Products products={products} />
      <Footer />

    </div>
  )
}

export default Home