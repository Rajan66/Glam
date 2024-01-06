import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import Sidebar from './Sidebar/Sidebar';
import Orders from './Orders/Orders';
import User from './User/User';
import AdminProducts from './AdminProducts/AdminProducts';

import { SidebarData } from './Sidebar/SidebarData';

import "./Sidebar/Sidebar.css"

const Admin = () => {
    const [currentFirebaseUser, setCurrentFirebaseUser] = useState(null);
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const users = useSelector((state) => state.user)
    const foundUser = users.find((user) => user?.uid === currentFirebaseUser?.uid)
    const isAdmin = foundUser.role === 'moderator' ? true : false

    const [currentComponent, setCurrentComponent] = useState('form'); // Default to 'form' or initial component

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setCurrentFirebaseUser(user);
            } else {
                setCurrentFirebaseUser(null);
            }
        })
        return () => unsubscribe();
    }, []);


    const renderComponent = () => {
        switch (currentComponent) {
            case 'home':
                navigate('/')

            case 'user':
                return <User />

            case 'products':
                return <AdminProducts currentId={currentId} setCurrentId={setCurrentId} />

            case 'orders':
                return <Orders />

            default:
                return <AdminProducts currentId={currentId} setCurrentId={setCurrentId} />
        }
    };

    const handleSidebarClick = (linkTo) => {
        setCurrentComponent(linkTo);
    };

    return (
        <>
            {isAdmin ? (
                <div>
                    Page not found
                </div>
            ) : (
                <div className='App'>
                    <Sidebar SidebarData={SidebarData} handleSidebarClick={handleSidebarClick} currentComponent={currentComponent} />
                    {renderComponent()}
                </div >
            )}
        </>

    )
}

export default Admin