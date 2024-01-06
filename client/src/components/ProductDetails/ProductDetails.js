import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const ProductDetails = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <>

            <h1>
                    hello
            </h1>
        </>
    )
}

export default ProductDetails