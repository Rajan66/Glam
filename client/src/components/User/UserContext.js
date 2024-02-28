import React, { createContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [user, setUser] = useState()
    const dispatch = useDispatch

    useEffect(() => {
        dispatch(getUser())
    })

    return (
        <UserContext.Provider value={{
            user
        }}>{children}</UserContext.Provider>
    )
}

export default UserProvider