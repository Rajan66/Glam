import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
              {/* iniharu chahidaina vaye hataedeu la  */}
              <p>GlamHour</p>
              <p></p>
              <p>Because Makeup </p>
              <p>Is every woman's need</p>
              <button className='button' >
                <Link style={{ textDecoration: 'none ',color:'black'}} to="/Products"> Shop Now</Link>
              </button>
            </div>
        </div>
      )
}

export default Hero