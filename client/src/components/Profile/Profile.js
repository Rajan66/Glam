import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

import Navbar from '../Navbar/Navbar';
import OrderHistory from './OrderHistory';
import AccountPage from './AccountPage';
import { getUsers } from '../../actions/user';
import { getUserOrders } from '../../actions/order';


const MainContent = ({ activeContent }) => {
    const dispatch = useDispatch()

    const users = useSelector((state) => state.user)
    const orders = useSelector((state) => state.orders)
    console.log(orders)
    const [user, setUser] = useState()

    useEffect(() => {
        dispatch(getUsers())

    }, [])

    useEffect(() => {
        if (user) {
            dispatch(getUserOrders(user._id))
        }
    }, [user])

    useEffect(() => {
        if (users.length > 0) {
            const currentUser = firebase.auth().currentUser;
            const foundUser = users.find((user) => user?.uid === currentUser?.uid)
            setUser(foundUser)
        }
        console.log(user)
    }, [users]);

    return (
        <div className="flex-grow bg-gray-200 p-8">
            {activeContent === 'account' && <AccountPage user={user} />}
            {activeContent === 'order' && <OrderHistory orders={orders} />}
            {activeContent === 'logout' && <div>This is the logout page</div>}
        </div>
    );
};

const Profile = () => {
    const navigate = useNavigate()


    const [auth, setAuth] = useState(() => {
        const storedAuth = window.localStorage.getItem('auth');
        return storedAuth ? JSON.parse(storedAuth) : false;
    });

    const [activeContent, setActiveContent] = useState('account');



    const handleAccountClick = () => {
        setActiveContent('account');
    };

    const handleOrderClick = () => {
        setActiveContent('order');
    };

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

    return (
        <>
            {auth ? (
                <>
                    < Navbar />
                    <div className="h-screen flex items-center justify-center">
                        <div className='flex bg-zinc-50 w-full h-full'>
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