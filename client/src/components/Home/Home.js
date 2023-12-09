import React from 'react'
import { useDispatch } from 'react-redux'
import Products from '../Products/Products';


const Home = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Hello world</h1>
      <Products />
    </div>
  )
}

export default Home