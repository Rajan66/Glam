import React, { useEffect } from 'react'
import AllProducts from './ProductsView/ProductsView'
import Form from './Form/Form'
import { getProducts } from '../../../actions/products'
import { useDispatch } from 'react-redux'


const Products = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className='mx-10 mt-4 flex flex-wrap  h-screen'>
            <div className=''>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
            <div className='mt-5 overflow-y-auto'>
                <AllProducts setCurrentId={setCurrentId} />
            </div>

        </div>
    )
}

export default Products