import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { signOut, setPersistence, browserSessionPersistence } from 'firebase/compat/auth';
import { getAuth } from 'firebase/compat/auth';

import './styles.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SlideCart from './SlideCart'


const Navbar = () => {
  const navigate = useNavigate()

  const [auth, setAuth] = useState(false || window.localStorage.getItem('auth') === true)
  const [isAdmin, setIsAdmin] = useState(false || window.localStorage.getItem('isAdmin') === true)

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartSize = cartItems.length;

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

  useEffect(() => {

  }, [])

  window.addEventListener('scroll', changeColor)

  const handleLogout = () => {
    const auth = firebase.auth();
    setAuth(true)
    auth.signOut()
      .then(() => {
        window.localStorage.setItem('auth', 'false')
        window.localStorage.setItem('isAdmin', 'false')
        navigate('/auth');
      })
      .catch((error) => console.error(error.message));
  };
  const handleLogin = () => {
    navigate('/auth')
  };

  return (
    <>
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
              <a href='/'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='/'>About</a>
            </li>
            <li className='nav-item'>

              <a href=''>Cart {cartSize}</a>
            </li>
            <li>
              {auth ? (
                <Button className='nav-item' onClick={handleLogout} variant='outlined'>
                  Log out
                </Button>
              ) : (
                <Button className='nav-item' onClick={handleLogin} variant='outlined' >
                  Log in
                </Button>
              )}

            </li>
          </ul>
        </nav>
      </div >
    </>
  )
}

export default Navbar