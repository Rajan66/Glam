import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../Products/Products';
import Hero from '../Hero/Hero';
import Card from '../Card';
import {Grid} from '@mui/material'

import { getProducts } from '../../actions/products';


const Home = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <Hero />
      <Card products={products} />
  
      <h1></h1>
      <Products setCurrentId={setCurrentId} />
    </div>
  )
}

export default Home