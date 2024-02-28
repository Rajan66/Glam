import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../Products/Products';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import About from '../About/About'
import BestSellers from '../BestSellers/BestSellers'
import Newsletter from '../Newsletter/Newsletter'

import { getProducts } from '../../actions/products'


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
      <Products products={products} />
      <About />
      <BestSellers products={products} />
      <Newsletter />
      <section className='bg-black sm:px-16 px-8 sm:pt-24 pt-12 pb-8'>
        <Footer />
      </section>
    </div>
  )
}

export default Home