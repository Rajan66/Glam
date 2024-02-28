import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { getProduct } from '../../actions/products'
import { CartContext } from '../Cart/CartContext'


const ProductDetails = () => {
    const { addToCart } = useContext(CartContext)
    const { id } = useParams()

    const dispatch = useDispatch()
    const product = useSelector((state) => state.products.find(item => item._id === id));

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Set loading to true when starting to fetch data
        dispatch(getProduct(id))
            .then(() => setLoading(false)) // Set loading to false when data is fetched
            .catch(() => setLoading(false)); // In case of an error, set loading to false as well
    }, [dispatch, id]);

    if (loading) {
        return <div>Loading...</div>; // Show loading screen while data is being fetched
    }
    return (
        <>
            <section className="overflow-hidden bg-gray py-11 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="sticky top-0 z-50 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 lg:h-2/4 "><br></br><br></br>
                                    <img src={product.productImage} className="object-cover w-full lg:h-full"></img>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="mb-8 ">
                                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl"> {product.title}</h2>

                                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                        {product.description}
                                    </p>
                                    <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                        <span>Rs. {product.price}</span>
                                    </p>
                                    {/* <p className="text-green-600 dark:text-green-300 ">7 in stock</p> */}
                                </div>

                                <div className="flex flex-wrap items-center -mx-4 py-5 ">
                                    <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                        <button onClick={() => addToCart(product, product._id)}
                                            className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                            Add to Cart
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ProductDetails