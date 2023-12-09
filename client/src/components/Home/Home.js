import React from 'react'
import { useDispatch } from 'react-redux'



const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.posts);

  return (
    <div></div>
  )
}

export default Home