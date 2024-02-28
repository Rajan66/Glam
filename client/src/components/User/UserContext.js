import React, { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const users = useSelector((state) => state.users);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const currentUser = firebase.auth().currentUser;
                if (currentUser) {
                    const foundUser = users.find((user) => user?.uid === currentUser?.uid);
                    if (foundUser) {
                        setCurrentUser(foundUser);
                    }
                    console.log(currentUser)
                }
            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        };

        fetchCurrentUser();

    }, [users]);

    return (
        <UserContext.Provider value={{ currentUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;