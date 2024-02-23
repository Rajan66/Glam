import React, { useEffect, useState, useContext } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { SidebarContext } from '../Sidebar/SidebarContext'

import { CartContext } from '../Cart/CartContext'

import { BsBag } from 'react-icons/bs'
// import { Link } from 'react-router-dom'

import { Link } from 'react-scroll'

import logo from '../../images/logo.png'

import './styles.css'

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

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
          <Link href='#' className='logo'>
            <img src= {logo} alt='logo' />
          </Link>
          <div className='ham' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: '#fff' }} />)
              : (<FaBars size={30} style={{ color: '#fff' }} />)}

          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
            </li>
            <li className='nav-item'>
            <Link to="about" spy={true} offset={-100} duration={500} >About</Link>
            </li>
            <li className='nav-item'>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className='cursor-pointer flex relative sm:justify-center items-center'>
                <BsBag className='text-2xl text-white' />
                <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px]
                     text-white rounded-full flex justify-center items-center'>{itemAmount}
                </div>
              </div>
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