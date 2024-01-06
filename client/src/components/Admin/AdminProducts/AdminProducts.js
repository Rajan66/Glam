import React, { useEffect } from 'react'
import AllProducts from './AllProducts/AllProducts'
import Form from './Form/Form'
import { getProducts } from '../../../actions/products'
import { useDispatch } from 'react-redux'

import './AdminProducts.css'

const Products = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className='main'>
            <div className='productTable'>
                <AllProducts setCurrentId={setCurrentId} />
            </div>
            <div className='form'>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
        </div>
    )
}

export default Products