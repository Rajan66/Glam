import React, { useEffect, useState } from 'react'
import { Button } from '@mui/base'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../actions/user'
import { useDispatch } from 'react-redux'

const Auth = () => {
  const [auth, setAuth] = useState(false || window.localStorage.getItem('auth') === true)
  const [token, setToken] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true)
        window.localStorage.setItem('auth', true)
        userCred.getIdToken()
          .then((token) => setToken(token))
        // handleFirebaseSignUp()
      }
    })
  }, [])

  const handleFirebaseSignUp = () => {
    const currentUser = firebase.auth().currentUser;
    const firebaseCredentials = {
      email: currentUser.email,
      uid: currentUser.uid,
      name: currentUser.displayName,
    }
    dispatch(createUser(firebaseCredentials))
  }

  const handleGoogeLogin = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred) => {
        if (userCred) {
          setAuth(true)
          window.localStorage.setItem('auth', true)
          handleFirebaseSignUp()
          navigate('/')
        }
      })
      .catch((error) => console.log(error.message))
  }

  return (
    <div>
      <Button onClick={handleGoogeLogin} style={{ marginTop: "150px" }}>
        Login With Google
      </Button>
    </div>
  )
}

export default Auth