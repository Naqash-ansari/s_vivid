import React from 'react'
import Map_Icon from '../assets/contact/map1.webp'
import phone from '../assets/contact/phone.gif'
import email from '../assets/contact/Email.gif'
import Image from 'next/image'

const ConatctSession = () => {
    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-26'>
            <section className="p-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
                    <p className="text-gray-500 mt-2">
                        Feel free to contact us! Submit your queries here and we will get back to you as soon as possible.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Address */}
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=377+Cheetham+Hill+House,Manchester,M8+0SF,UK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <div className="bg-amber-600 p-8 sm:p-12 md:p-16 rounded-xl text-center flex flex-col items-center cursor-pointer">
                            <span className="text-3xl">
                                <Image alt="map" width={100} height="auto" src={Map_Icon} />
                            </span>
                            <p className="text-white font-semibold mt-3">M8 0SF, UK</p>
                            <p className="text-white font-semibold mt-1">377 Cheetham Hill House</p>
                        </div>
                    </a>



                    {/* Phone */}
                    <div className="bg-amber-600 p-8 sm:p-12 md:p-16 rounded-xl text-center flex flex-col items-center cursor-pointer">
                        <a href="tel:+923070468097" className="block">
                            <span className="text-3xl">
                                <Image alt="phone" width={100} height={'auto'} src={phone} />
                            </span>
                            <p className="font-semibold mt-3 text-white">+447728339751</p>
                        </a>
                    </div>


                    {/* Email */}
                    <div className="bg-amber-600 p-8 sm:p-12 md:p-16 rounded-xl text-center flex flex-col items-center cursor-pointer">
                        <a href="mailto:pagedone1234@gmail.com" className="block">
                            <span className="text-3xl">
                                <Image alt="email" width={200} height="auto" src={email} />
                            </span>
                            <p className="text-white font-semibold mt-3">pagedone1234@gmail.com</p>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ConatctSession