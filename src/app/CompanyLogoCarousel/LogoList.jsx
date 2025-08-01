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
// import log1 from '/bg1.jpg';
// import log2 from '/bg1.jpg';
// import log3 from '/bg1.jpg';
// import log4 from '/bg1.jpg';
// import log5 from '/bg1.jpg';

const logos = ['/bg1.jpg', '/bg1.jpg', '/bg1.jpg', '/bg1.jpg', '/bg1.jpg'];

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
