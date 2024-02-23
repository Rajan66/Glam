import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import Product from './Product/Product'

import './styles.css'
import Navbar from '../Navbar/Navbar'

const Products = ({ products, setCurrentId }) => {
    return (
        <>
            <section className='py-16'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                        {products.map((product) => {
                            return <Product product={product} key={product._id} />
                        })}
                    </div>

                </div>
            </section >
        </>
    )
}

export default Products