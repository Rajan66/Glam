import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Orders from './Orders/Orders';
import User from './User/User';
import AdminProducts from './AdminProducts/AdminProducts';

import { SidebarData } from './Sidebar/SidebarData';

import "./Sidebar/Sidebar.css"

const Admin = () => {
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [currentComponent, setCurrentComponent] = useState('form'); // Default to 'form' or initial component

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
                return <User />;
        }
    };

    const handleSidebarClick = (linkTo) => {
        setCurrentComponent(linkTo);
    };

    return (
        <div className='App'>

            <Sidebar SidebarData={SidebarData} handleSidebarClick={handleSidebarClick} currentComponent={currentComponent} />
            {renderComponent()}
        </div >
    )
}

export default Admin