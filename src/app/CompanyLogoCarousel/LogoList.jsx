'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// Import images
import log1 from '../assets/images/log1.png';
import log2 from '../assets/images/log2.png';
import log3 from '../assets/images/log3.png';
import log4 from '../assets/images/log4.png';
import log5 from '../assets/images/log5.png';

const logos = [log1, log2, log3, log4, log5, log1, log2, log3, log4, log5];

export default function LogoList() {
    return (
        <div className="w-full">
            <Swiper
                autoplay={{
                    delay: 2000, // 2 seconds delay
                    disableOnInteraction: false, // Keeps autoplay running
                }}
                loop={true} // Infinite scrolling
                pagination={false}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 }, // Small phones
                    480: { slidesPerView: 3, spaceBetween: 15 }, // Larger phones
                    640: { slidesPerView: 4, spaceBetween: 20 }, // Tablets
                    1024: { slidesPerView: 6, spaceBetween: 25 }, // Laptops
                    1280: { slidesPerView: 8, spaceBetween: 30 }, // Large screens
                }}
                className="mySwiper"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center">
                        <Image src={logo} width={80} height={80} className="rounded-lg" alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
