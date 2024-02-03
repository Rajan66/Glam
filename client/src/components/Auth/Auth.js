import React, { useEffect, useState } from 'react'
import { Button } from '@mui/base'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useNavigate } from 'react-router-dom'
import { createUser, getUsers } from '../../actions/user'
import { useDispatch, useSelector } from 'react-redux'

import COVER_IMAGE from '../../images/cover.png'

const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isAdmin, setIsAdmin] = useState(false || window.localStorage.getItem('isAdmin') === true)
  const [auth, setAuth] = useState(false || window.localStorage.getItem('auth') === true)
  const [token, setToken] = useState('')
  const users = useSelector((state) => state.user)

  useEffect(() => {

    dispatch(getUsers())
    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true)
        window.localStorage.setItem('auth', true)
        userCred.getIdToken()
          .then((token) => setToken(token))
        checkModerator(userCred)
      }
    })
  }, [dispatch, auth])

  const checkModerator = (userCred) => {

    const foundUser = users.find((user) => user?.uid === userCred?.uid)
    if (foundUser && foundUser.role === 'moderator') {
      setIsAdmin(true)
      window.localStorage.setItem('isAdmin', true)
    }
  }

  const handleFirebaseSignUp = () => {
    const currentUser = firebase.auth().currentUser;
    const firebaseCredentials = {
      email: currentUser.email,
      uid: currentUser.uid,
      name: currentUser.displayName,
    }
    dispatch(createUser(firebaseCredentials))
  }

  const handleGoogleLogin = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred) => {
        if (userCred) {
          setAuth(true)
          window.localStorage.setItem('auth', true)
          checkModerator(userCred)
          handleFirebaseSignUp()
          navigate('/')
        }
      })
      .catch((error) => console.log(error.message))
  }

  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className='text-4x1 text-white font-bold my-4'>Turn your Ideas into Reality</h1>
          <p className='text-x1 text-white font-normal'>Start for free and get attractive offers from the community</p>
        </div>
        <img src={COVER_IMAGE} className='w-full h-full object-cover'/>
      </div>
      <Button onClick={handleGoogleLogin} style={{ marginTop: "150px" }}>
        {/* SignUP form here */}
        Login With Google
      </Button>
    </div>
  )
}

export default Auth