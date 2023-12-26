import React, { useEffect, useState } from 'react'
import { Button } from '@mui/base'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [auth, setAuth] = useState(false || window.localStorage.getItem('auth') === true)
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true)
        window.localStorage.setItem('auth', true)

        userCred.getIdToken()
          .then((token) => setToken(token))
        navigate('/')
      }
    })
  }, [])

  const handleGoogeLogin = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred) => {
        if (userCred) {
          setAuth(true)
          window.localStorage.setItem('auth', true)
          navigate('/')
        }
      })
      .catch((error) => console.log(error.message))
  }

  return (
    <div>
      <Button onClick={handleGoogeLogin} style={{marginTop:"150px"}}>
        Login With Google
      </Button>
    </div>
  )
}

export default Auth