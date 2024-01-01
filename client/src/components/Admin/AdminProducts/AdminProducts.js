import React, { useEffect } from 'react'
import AllProducts from './AllProducts/AllProducts'
import Form from './Form/Form'
import { getProducts } from '../../../actions/products'
import { useDispatch } from 'react-redux'

const Products = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <AllProducts setCurrentId={setCurrentId} />
        </div>
    )
}

export default Products