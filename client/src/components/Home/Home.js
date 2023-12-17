import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Products from '../Products/Products';
import Hero from '../Hero/Hero';
import Card from '../Card';

import { getProducts } from '../../actions/products';


const Home = () => {
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <Hero />
      <Card />
      <h1></h1>
      <Products setCurrentId={setCurrentId}/>
    </div>
  )
}

export default Home