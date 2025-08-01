"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import img from "../../assets/images/Gold.jpg";
import Brands from "../../assets/images/Brands.jpg";
import MM from "../../assets/images/3M.png";
import Tara from "../../assets/images/Tara.png";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const page = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const slides = [Brands, img, MM, Tara]; // Array of images

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[65vh] relative p-4 bg-amber-50">
                            <Image
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default page;
