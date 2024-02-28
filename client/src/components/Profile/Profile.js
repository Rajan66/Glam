import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import Navbar from '../Navbar/Navbar';
import OrderHistory from './OrderHistory';
import AccountPage from './AccountPage';

const MainContent = ({ activeContent }) => {
    return (
        <div className="flex-grow bg-gray-200 p-8">
            {activeContent === 'account' && <AccountPage/>}
            {activeContent === 'order' && <OrderHistory/>}
            {activeContent === 'logout' && <div>This is the logout page</div>}
        </div>
    );
};

const Profile = () => {
    const [auth, setAuth] = useState(() => {
        const storedAuth = window.localStorage.getItem('auth');
        return storedAuth ? JSON.parse(storedAuth) : false;
    });
    const navigate = useNavigate()

    const dispatch = useDispatch()

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

    const [activeContent, setActiveContent] = useState('account');

    const handleAccountClick = () => {
        setActiveContent('account');
    };

    const handleOrderClick = () => {
        setActiveContent('order');
    };

    return (
        <>
            {auth ? (
                <>
                    < Navbar />
                    <div className="h-screen flex items-center justify-center">
                        <div className='flex bg-zinc-50 w-1/2 h-1/2 '>
                            <div className="bg-gray-800 text-white h-full w-64">
                                <div className="p-4 cursor-pointer" onClick={handleAccountClick}>
                                    Your Account
                                </div>
                                <div className="p-4 cursor-pointer" onClick={handleOrderClick}>Order History</div>
                                <div className="p-4 cursor-pointer" onClick={handleLogout}>Logout</div>
                            </div>
                            <MainContent activeContent={activeContent} />
                        </div>
                    </div>
                </>
            )
                : (
                    <div>
                        Page Not Found
                    </div>
                )
            }
        </>
    )
}

export default Profile