"use client";

import Image from "next/image";
import islamic_box from "./images/images.jpg";
import sign_b from "./images/imag.jpg";
import ig2 from "./images/images11.jpg";
import Pizza_box from "../assets/services/pizza1.jpg";
import { TypeAnimation } from "react-type-animation";

const AboutServices = () => {
    return (
        <section className="px-4 py-20 bg-white">
            <div id="features" className="mx-auto max-w-6xl">
                <p className="text-center text-base font-semibold text-amber-600">Our Expertise</p>
                <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-gray-800 pb-6">
                    Eye-catching signage for every business
                </h2>

                <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                    {/* Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
                        <Image src={islamic_box} width={290} height={220} className="object-cover rounded-lg" alt="service" />
                        <Image src={ig2} width={290} height={220} className="object-cover rounded-lg" alt="service" />
                        <Image src='/feature2.jpg' width={290} height={220} className="object-cover rounded-lg" alt="service" />
                        <Image src='/feature3.jpg' width={290} height={220} className="object-cover rounded-lg" alt="service" />
                    </div>

                    {/* Animation + Text */}
                    <div className="text-center lg:text-left max-w-xl">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            <TypeAnimation
                                sequence={[
                                    "Custom Shop Signs",
                                    1500,
                                    "3D Letters & LED Boards",
                                    1500,
                                    "Interior & Exterior Branding",
                                    1500,
                                    "Fast & Reliable Service",
                                    1500,
                                ]}
                                speed={50}
                                deletionSpeed={30}
                                repeat={Infinity}
                            />
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                            At <strong className="text-amber-600">Sign Vivid</strong>, we specialize in crafting <strong className="text-amber-600">bold</strong>, <strong className="text-amber-600">creative</strong>, and <strong className="text-amber-600">custom signage solutions</strong> that elevate your brand's visibility. Whether you own a <strong className="text-amber-600">restaurant</strong>, <strong className="text-amber-600">salon</strong>, <strong className="text-amber-600">retail shop</strong>, <strong className="text-amber-600">nail studio</strong>, <strong className="text-amber-600">barbershop</strong>, or a large <strong className="text-amber-600">corporate office</strong>, we design signs that reflect your unique identity and style.
                            <br /><br />
                            From <strong className="text-amber-600">3D illuminated letters</strong> and <strong className="text-amber-600">LED boards</strong> to <strong className="text-amber-600">indoor branding</strong> and <strong className="text-amber-600">outdoor displays</strong>, our signs are built with <strong className="text-amber-600">high precision</strong>, <strong className="text-amber-600">durability</strong>, and a strong focus on <strong className="text-amber-600">visual impact</strong>. Our mission is simple — to help your business stand out and leave a lasting impression.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutServices;
