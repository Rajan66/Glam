import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from '../Navbar/Navbar'
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
    }, [dispatch, id])
    window.scrollTo({ top: 0, behavior: 'smooth' })


    if (loading) {
        return <div>Loading...</div>; // Show loading screen while data is being fetched
    }
    return (
        <>
            <Navbar />
            <section className="mt-19 mt-5 max-w-screen-2xl container mx-auto xl:px-28 px-4">
                <div className="p-3 max-w-7xl m-auto">
                    <div className='mt-0'>
                        <a href='/' className='text-gray-600 no-underline'>Home</a>
                        <a href='/products' className='font-bold text-black no-underline'> / Shop</a>
                    </div>
                    <div className="mt-5 sm:mt-10 ">
                        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
                            <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                <img src={product.productImage} className=" w-full "></img>
                            </div>

                            <div className="mb-8 ">
                                <h2 className="title text-left"> {product.title}</h2>
                                <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">
                                    {product.description}
                                </p>

                                <p className="text-xl text-red-500 font-semibold sm:text-2xl ">
                                    <span>Rs. {product.price}</span>
                                </p>
                                <div className='mt-4'>
                                    <div className='text-left flex flex-col gap-2 w-full'>
                                        <label className='font-semibold'>Quantity</label>
                                        <input type='number' name='price' id='price' defaultValue={1} required
                                            className='border border-gray-300 text-sm font-semibold mb-1 max-w-full 
                                        w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500'/>
                                    </div>

                                    <div className="w-full text-left my-4">
                                        <button onClick={() => addToCart(product, product._id)}
                                            className="flex justify-center items-center gap-2 w-full py-3
                                            px-1 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out
                                            duration-150 shadow-slate-600 hover:bg-white hover:text-red-500
                                            lg:m-0 md:px-6">
                                            <span> Add to Cart</span>
                                        </button>
                                    </div>

                                </div>
                                {/* <p className="text-green-600 dark:text-green-300 ">7 in stock</p> */}
                            </div>
                        </div>
                    </div>
                    <div className='text-black/75 mt-12'>
                        <p>loksjfdnfwoihfjdnoijsds</p>
                        <p>loksjfdnfwoihfjdnoijsds</p>
                        <p>loksjfdnfwoihfjdnoijsds</p>
                        <p>loksjfdnfwoihfjdnoijsds</p>
                        <p>loksjfdnfwoihfjdnoijsds</p>
                    </div>
                </div>
            </section >
        </>
    )
}
export default ProductDetails