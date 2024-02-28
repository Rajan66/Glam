import React from 'react'
import { Link } from 'react-router-dom'
import erase from '../../images/eraser.jpg'
import './About.css'

const About = () => {
  return (
    <>
      <div className=" bg-[#f8f8f8] w-full flex flex-col justify-center items-center py-4 mb-8">
        <p className="text-xl font-bold underline text-fuchsia-300 cursor-default">When you look good, you feel good</p>
        <h2 className="text-xl font-bold mb-2 ml-24">New Collection for <span className="italic">Delicate Skin</span></h2>
        <div className="flex items-center">
          <img src={erase} alt="Image" className="w-25 h-25 mr-10 ml-28" />
          <div className="text-md">Makeup products of same type isn't for everyone.<br />For those suffering for finding the products for sensitive and delicate skin,<br />
            <p className="text-xl mt-2"><span className="italic font-bold">WE GOT YOU</span></p>
            <Link
              style={{ textDecoration: 'none ', color: 'black' }}
              to="/products"
              className="uppercase px-6 py-3 bg-red-600 border border-red-600 text-gray-800 hover:bg-red-700 hover:border-red-700 hover:text-white transition duration-300 ease-in-out">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}





export default About