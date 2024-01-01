import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AllProducts from './AllProducts/AllProducts';
import Form from './Form/Form';
import { getProducts } from '../../actions/products';
import Sidebar from './Sidebar/Sidebar';
import "./Sidebar/Sidebar.css"

const Admin = () => {
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProducts())
    }, [])

    return (
        <div className='App'>
            <Sidebar />
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <AllProducts setCurrentId={setCurrentId} />
        </div >
    )
}

export default Admin