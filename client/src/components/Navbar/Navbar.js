import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '@mui/base'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import './styles.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  //setting mobile nav
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  //change nav color when scrolling
  const [color, setcolor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setcolor(true)
    } else {
      setcolor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  //close menu on click
  const closeMenu = () => setClick(false)

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        window.localStorage.setItem('auth', 'false')
        navigate('/auth') // navigate to home instead of auth later
      })
      .catch((error) => console.log(error.message))
  }

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <nav className='navbar'>
        <a href='#' className='logo'>
          {/* <img rakhne hoki logo ko vanera banako :lumanathink: */}
        </a>
        <div className='ham' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#fff' }} />)
            : (<FaBars size={30} style={{ color: '#fff' }} />)}

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
          <Button className='nav-item' onClick={handleLogout}>
            Logout
          </Button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar