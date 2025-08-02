// import Image from 'next/image';
import React from 'react';

const GoogleReview = () => {
    return (
        <section id="testimonies" className="py-20 pb-30 bg-slate-900">
            <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
                <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
                    <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                        <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                            Words from Clients
                        </div>
                        <h1 className="mb-5 text-3xl font-semibold text-white md:text-5xl">
                            Our Work Speaks for Itself
                        </h1>
                        <p className="text-xl text-gray-100 md:text-2xl">
                            Here's what our clients say about Sign Vivid.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">

                    {[
                        {
                            name: "Ali Raza",
                            role: "Ali's Barber Shop",
                            initials: "AR",
                            message: "Our new 3D signage outside the shop turns heads. Clean and modern look!",
                        },
                        {
                            name: "Sana Malik",
                            role: "Blossom Nail Studio",
                            initials: "SM",
                            message: "The acrylic signage with soft glow is a perfect match for our nail salon aesthetic!",
                        },
                        {
                            name: "Rohit Verma",
                            role: "Spice House Restaurant",
                            initials: "RV",
                            message: "Thanks to Sign Vivid, our restaurant sign stands out even at night. Beautiful lighting!",
                        },
                        {
                            name: "Zoya Khan",
                            role: "Street Style Garments",
                            initials: "ZK",
                            message: "We wanted something bold and creative—and Sign Vivid delivered exactly that!",
                        },
                        {
                            name: "Farhan Ali",
                            role: "Sunrise Grocery Store",
                            initials: "FA",
                            message: "Customers now find our store easily. Very professional work with quality materials.",
                        },
                        {
                            name: "Mehak Noor",
                            role: "Noor Beauty Salon",
                            initials: "MN",
                            message: "Elegant signage with backlit letters added a premium feel to our storefront.",
                        },
                        {
                            name: "Imran Shaikh",
                            role: "Royal Lounge Café",
                            initials: "IS",
                            message: "The glowing 3D letters added charm to our café. Totally satisfied with the service.",
                        },
                        {
                            name: "Areeba Yousuf",
                            role: "Elegant Cuts",
                            initials: "AY",
                            message: "Our signage feels fresh and stylish now. Installation was quick and neat!",
                        },
                    ].map((review, index) => (
                        <div key={index} className="text-sm leading-6">
                            <div className="relative group">
                                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
                                <div className="relative p-6 space-y-6 rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                                    {/* <div className="flex justify-center">
                                        <Image width={150} height={100} src="/bg1.jpg" alt="Sign Image" />
                                    </div> */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 flex items-center justify-center bg-amber-600 text-white font-semibold rounded-full text-sm uppercase">
                                            {review.initials}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                                            <p className="text-gray-500 text-md">{review.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-md">{review.message}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default GoogleReview;
