import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

import './styles.css'

const Navbar = () => {
  //setting mobile nav
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

//change nav color when scrolling
const [color,setcolor] = useState(false)
const changeColor = () =>{
  if(window.scrollY>=90){
    setcolor(true)
  } else{
    setcolor(false)
  }
}

window.addEventListener('scroll', changeColor)

//close menu on click
const closeMenu = () => setClick(false)

  return (
    <div className= {color? 'header header-bg' : 'header'}>
      <nav className='navbar'>
        <a href='#' className='logo'>
          {/* <img rakhne hoki logo ko vanera banako :lumanathink: */ }
        </a>
        <div className='ham' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{color: '#fff'}}/>)
          : (<FaBars size={30} style={{color: '#fff'}}/>) }
          
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='#'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#'>About</a>
          </li>
          <li className='nav-item'>
            <a href='#'>Contact</a>
          </li>
          <li className='nav-item'>
            <a href='#'>Demo</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar