import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useNavigate } from 'react-router-dom'
import { createUser, getUsers } from '../../actions/user'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'

import Login from './Login'

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
      console.log(foundUser.role)
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
    <div>
      <Login handleGoogleLogin={handleGoogleLogin}/>
    </div>
  )
}
export default Auth