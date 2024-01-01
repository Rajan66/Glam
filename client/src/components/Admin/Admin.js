import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AllProducts from './AllProducts/AllProducts';
import Form from './Form/Form';
import { getProducts } from '../../actions/products';
import Sidebar from './Sidebar/Sidebar';
import "./Sidebar/Sidebar.css"
import { SidebarData } from './Sidebar/SidebarData';
import Orders from './Orders/Orders';
import User from './User/User';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [currentComponent, setCurrentComponent] = useState('form'); // Default to 'form' or initial component

    const renderComponent = () => {
        switch (currentComponent) {
            case 'user':
                // return <Form currentId={currentId} setCurrentId={setCurrentId} />;
                return <User />
            case 'orders':
                // return <AllProducts setCurrentId={setCurrentId} />;
                return <Orders />
            case 'home':
                navigate('/')
            // Add other cases for different components
            default:
                return <User />;
        }
    };

    const handleSidebarClick = (linkTo) => {
        setCurrentComponent(linkTo);
    };

    useEffect(() => {

        dispatch(getProducts())
    }, [])

    return (
        <div className='App'>

            <Sidebar SidebarData={SidebarData} handleSidebarClick={handleSidebarClick} />
            {renderComponent()}
        </div >
    )
}

export default Admin