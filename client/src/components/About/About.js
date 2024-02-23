import React from 'react'
import brow from '../../images/brow.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='container'>
        <h2> About</h2>
            <span className='line'></span>
            <p>Welcome to GlamHour</p>
            <p>When you look good, you feel good</p><br></br>
          <div className='col-2'>
          <img src={brow} alt='highlighter' />
          <h4>Want to have <b>thicker</b> brows? <br></br><br></br>
          <h6>You've come to the right place!</h6></h4>
          <button className='button'>Explore</button>
          
          </div>
        </div>
    </div>
  )
}





export default About