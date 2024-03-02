import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { BsPlus, BsEyeFill } from 'react-icons/bs'

import { CartContext } from '../Cart/CartContext'

const Card = ({ filteredItems }) => {
    const { addToCart } = useContext(CartContext)
    return (
        <section className=''>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                    {filteredItems.slice(0, 8).map((item) => (
                        <div key={item._id}>
                            <div className='border border-[#e4e4e4] h-[350px] mb-4 relative overflow-hidden group transition'>
                                <div className='w-full h-[full] flex justify-center items-center'>
                                    <div className="w-[280px] py-4 mx-auto flex justify-center items-center">
                                        <Link to={`/product/${item._id}`}>
                                            <img className='max-h-[360px] group-hover:scale-110 transition duration-300' src={item.productImage} alt={item.title} />
                                        </Link>
                                    </div>
                                </div>
                                <div className='absolute top-1 -right-14 group-hover:right-1 p-2 flex flex-col items-center justify-center gap-y-2  group-hover:opacity-100 transition-all duration-300 '>
                                    <button onClick={() => addToCart(item, item._id)}>
                                        <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                                            <BsPlus className='text-3xl' />
                                        </div>
                                    </button>
                                    <Link to={`/product/${item._id}`} className='w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl'>
                                        <BsEyeFill />
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div className='text-md capitalize text-gray-500 mb-1'>{item.category}</div>
                                <Link to={`/product/${item._id}`} style={{ textDecoration: 'none' }}><h4 className='font-semibold mb-1 text-black'>{item.title}</h4></Link>
                                <div className='font-semibold'>$ {item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Card