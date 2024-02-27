import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useNavigate } from 'react-router-dom'
import { createUser, getUsers } from '../../actions/user'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'

const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user)
  
  const [auth, setAuth] = useState(() => {
    const storedAuth = window.localStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  const [token, setToken] = useState('')
  const [isAdmin, setIsAdmin] = useState(() => {
    const storedIsAdmin = window.localStorage.getItem('isAdmin');
    return storedIsAdmin ? JSON.parse(storedIsAdmin) : false;
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true)
        userCred.getIdToken()
          .then((token) => setToken(token))
        dispatch(getUsers())
      }
    })
  }, [])

  useEffect(() => {
    if (auth) {
      dispatch(getUsers())
    }
  }, [auth])

  useEffect(() => {
    if (users.length > 0) {
      const currentUser = firebase.auth().currentUser;
      const foundUser = users.find((user) => user?.uid === currentUser?.uid)
      if (foundUser && foundUser.role === 'moderator') {
        setIsAdmin(true);
        window.localStorage.setItem('isAdmin', true);
      }else{
        navigate('/')
      }
    }
  }, [users]);

  useEffect(() => {
    if (isAdmin) {
      navigate('/admin')
    }
  }, [isAdmin])

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
          handleFirebaseSignUp()
        }
      })
      .catch((error) => console.log(error.message))
  }

  return (
    <div>
      <Login handleGoogleLogin={handleGoogleLogin} />
    </div>
  )
}
export default Auth
