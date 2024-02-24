import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../Products/Products';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import About from '../About/About'

import { getProducts } from '../../actions/products';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';


const Home = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />

      {/* <Card products={products} /> (delete Card later) */}
      <Sidebar />
      <Products products={products} />
      <About />
      <Footer />


    </div>
  )
}

export default Home