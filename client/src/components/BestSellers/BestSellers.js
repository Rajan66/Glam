import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const BestSellers = ({ products }) => {
    const bestSellers = products.filter((item) => item.status === "Best Sellers");

    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 py-16">
            <div className="text-center">
                <h2 className="text-3xl font-semibold capitalize mb-5">
                    Best Sellers
                </h2>
            </div>

            {/* best seller products card */}
            <div className='mb-16'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        bestSellers.map((product) => (
                            <SwiperSlide key={product._id}>
                                <Link to={`/product/${product._id}`}>
                                    <img
                                        src={product.productImage}
                                        alt={product.title}
                                        className="mx-auto w-full h-[250px] hover:scale-105 transition-all duration-300"
                                    />
                                </Link>
                                <div className="mt-4 px-4 relative">
                                    <h4 className="text-base font-semibold mb-2 truncate">{product.title}</h4>
                                    <div className="flex justify-between">
                                        <p className="text-black/50">{product.category}</p>
                                        <p className="font-semibold">Rs. {product.price}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default BestSellers;