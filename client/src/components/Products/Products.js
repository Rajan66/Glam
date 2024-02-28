import React, { useEffect } from 'react'
import Product from './Product/Product'

import { Link } from 'react-router-dom'

import './styles.css'

const Products = ({products}) => {
    return (
        <>
            <section className='py-16'>
                <div className="text-center">
                    <h2 className="text-3xl font-semibold capitalize mb-5">
                        Featured Products
                    </h2>
                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                        {products.slice(0, 3).map((product) => {
                            return <Product product={product} key={product._id} />
                        })}
                    </div>

                </div>
                <div className="flex justify-center items-center h-full py-10">
                    <Link
                        to="/products"
                        style={{ textDecoration: 'none' }}
                        className="bg-gray-500 flex p-4 justify-center items-center text-white w-[220px] font-mono "
                    >
                        View All
                    </Link>
                </div>
            </section >
        </>
    )
}

export default Products