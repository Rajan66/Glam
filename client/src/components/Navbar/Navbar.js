import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { Link } from 'react-scroll'


import { SidebarContext } from '../Sidebar/SidebarContext'
import { CartContext } from '../Cart/CartContext'

import { BsPersonFill } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from '@mui/material'
import { BsBag } from 'react-icons/bs'
import logo from '../../images/logo1.png'

import './styles.css'

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)

  const navigate = useNavigate()

  // nav items?
  const navItems = [
    { title: "Eye Makeup", path: "/" },
    { title: "Lip Makeup", path: "/" },
    { title: "Face Makeup", path: "/" },
    { title: "Body Makeup", path: "/" },
  ]

  const [auth, setAuth] = useState(() => {
    const storedAuth = window.localStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  const [isAdmin, setIsAdmin] = useState(() => {
    const storedAuth = window.localStorage.getItem('isAdmin');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });


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


  const handleLogin = () => {
    navigate('/auth')
  };

  const closeMenu = () => setClick(false)
  return (
    <>
      <header className={color ? 'header header-bg' : 'header'}>
        {/* // {color ? 'header header-bg' : 'header'} */}
        {/* <nav className='navbar'> */}
        <nav className='flex justify-between items-center md:py-1 pt-6 pb-0 pr-6'>
          <a to='/' className='logo'>
            <img src={logo} alt='logo' />
          </a>
          <div className='ham' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: '#fff' }} />)
              : (<FaBars size={30} style={{ color: '#fff' }} />)}
          </div>
          <div className='text-lg text-black sm:flex gap-4'>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className='nav-item cursor-pointer'>
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
              </li>
              <li className='nav-item cursor-pointer'>
                <Link to="about" spy={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
              </li>
              <li className='nav-item'>
                <div onClick={() => setIsOpen(!isOpen)}
                  className='cursor-pointer flex relative sm:justify-center items-center'>
                  <BsBag className='text-2xl text-black' />
                  <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px]
                    text-white rounded-full flex justify-center items-center'>{itemAmount}
                  </div>
                </div>
              </li>

              <li className='nav-item'>
                {auth ? (
                  <>
                    <a href='/profile'>
                      <BsPersonFill className='text-3xl text-black cursor-pointer' />
                    </a>
                  </>
                ) : (
                  <Button  onClick={handleLogin} variant='outlined' >
                    Log in
                  </Button>
                )}
              </li>

            </ul>
          </div>
        </nav>
        <hr className='hr' />
        <div className='down'>
          <div className='pt-0'>
            <ul className='lg:flex items-center justify-between text-black container hidden'>
              {
                navItems.map(({ title, path }) => (
                  <li key={title}>
                    <Link to="/">{title}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </header >

    </>
  )
}

export default Navbar