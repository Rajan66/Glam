import React from 'react'
import { useDispatch } from 'react-redux'
import Products from '../Products/Products';
import Hero from '../Hero/Hero';
import Card  from '../Card';


const Home = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <Hero/>
      <Card/>
      <h1></h1>
      <Products />
    </div>
  )
}

export default Home