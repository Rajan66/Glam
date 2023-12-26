import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AllProducts from './AllProducts/AllProducts';
import Form from './Form/Form';
import { getProducts } from '../../actions/products';

const Admin = () => {
    const [currentId, setCurrentId] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProducts())
    }, [])

    return (
        <div style={{ display: "flex", marginTop: " 200px", flexDirection: "column", alignItems: "center" }}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <AllProducts setCurrentId={setCurrentId} />
        </div>
    )
}

export default Admin