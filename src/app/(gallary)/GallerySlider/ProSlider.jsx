"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Pro.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const ProSlider = () => {

    let product_images = [
        'barber3.jpg',
        'barber1.jpg',
        'barber2.jpg',
        'barber6.jpg',
        'Barbers5.webp',
        'barber5.avif',
        'barber4.webp',
    ];

    return (
        <div className='p-10'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
                autoplay={true}
                loop={true}
            >
                {product_images.map((img, index) => (
                    <SwiperSlide key={index} className="!w-[300px] !h-[400px]">
                        <img
                            src={`/${img}`}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}

export default ProSlider