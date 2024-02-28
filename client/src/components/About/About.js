import React from 'react'
import { Link } from 'react-router-dom'
import erase from '../../images/eraser.jpg'
import './About.css'

const About = () => {
  return (
    <div className='block'>
      <p>When you look good, you feel good</p>
      <h2 className="text-xl font-bold mb-2 ml-24">New Collection for <i>Delicate Skin</i></h2>
      <div className="flex items-center">
        <img src={erase} alt="Image" className="w-25 h-25 mr-10 ml-28" /> 
        <p className="text-md">Makeup products of same type isn't for everyone. <br/>
        For those suffering for finding the products for sensitive and delicate skin,<br/>
        <p className='text-xl mt-2'><i><b>WE GOT YOU</b></i></p>
        <button className='button p-2' >
        <Link style={{ textDecoration: 'none ',color:'black'}} to="/Products"> Explore</Link>
      </button>      
        </p> 
        
      </div>
      
    </div>
    
    
    
    
    // <div className='about' id='about'>
    //   <div className='container'>
    //     <p>When you look good, you feel good</p>
    //     <h3> New Collection for <i>Delicate skin</i></h3>
    //     <div className='col-2'>
    //       <img src={erase} alt='remover' className='image'/>
    //       <p>Makeup products of same type isn't for everyone.For those suffering for finding the products for sensitive and delicate skin</p>
    //       <p><i>WE GOT YOU</i></p>
    //       <button className='button' >
    //         <Link style={{ textDecoration: 'none ',color:'black'}} to="/Products"> Explore</Link>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  )
}





export default About