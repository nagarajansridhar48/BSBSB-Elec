import React from 'react'
import asset from "../../assets/about/about_asset";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

const SwiperSec = () => {
    return (
        <div >
            <div className="w-full ">
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper max-w-full mx-auto h-96 "
                >
                    {[asset.about1, asset.about2, asset.about3, asset.about4, asset.about5].map(
                        (img, index) => (
                            <SwiperSlide
                                key={index}
                                className="relative w-full h-[400px] flex items-center justify-center"
                            >
                                {/* Background Image */}
                                <img
                                    src={img}
                                    alt=""
                                    className="w-full h-[400px] object-cover"
                                />

                            </SwiperSlide>
                        )
                    )}
                </Swiper>
                <div className="absolute w-full z-10 h-[385px] top-[80px] bg-black/30 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold opacity-90"
                        data-aos="zoom-in"
                    >
                        Products
                    </h1>
                    <p
                        className="mt-2 text-sm sm:text-base md:text-lg max-w-2xl"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        We are managed by the masters. We collaborate with tycoons in the industry
                        to deliver the best output. Make meetings easier with us.
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center py-8'>
                <p className="bg-black text-white font-semibold text-2xl w-90 text-end uppercase p-1 pe-4 mt-10" data-aos='fade-right'>
                    Lorem ipsum list
                </p>
                <div className="border-b-3 border-black mt-8 w-[40%] ml-auto"></div>
            </div>
        </div>
    )
}

export default SwiperSec