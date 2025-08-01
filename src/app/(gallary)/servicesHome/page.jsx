import React from 'react';
import logo1 from '../../assets/images/log1.png'
import logo2 from '../../assets/images/log2.png'
import logo3 from '../../assets/images/log3.png'
import logo4 from '../../assets/images/log4.png'
import logo5 from '../../assets/images/log5.png'
import ncp from '../../assets/images/ncp.jpg'
import nhs from '../../assets/images/nhs.png'
import brands from '../../assets/images/Brands.jpg'
import Image from 'next/image';

const ServicesHome = () => {

    const sectors = [
        {
            title: 'Public & Commercial',
            description: 'Platform to convert Domains into Content websites.',
            // icon: 'https://www.svgrepo.com/show/164986/logo.svg',
            icon: logo1,
        },
        {
            title: 'Education',
            description: 'Platform to create dynamic widgets for websites.',
            // icon: 'https://www.svgrepo.com/show/120853/logo.svg',
            icon: logo2,
        },
        {
            title: 'Sports & Leisure',
            description: 'API SaaS Platform that provides API Suit to help you ship fast.',
            // icon: 'https://www.svgrepo.com/show/120852/logo.svg',
            icon: logo1,
        },
        {
            title: 'Retail & Highstreet Signs',
            description: 'Chrome Extension that lets you add ChatGPT on any website',
            // icon: 'https://www.svgrepo.com/show/120850/logo.svg',
            icon: logo1,
        },
        {
            title: 'Hotels & Resorts',
            description: 'Chrome Extension that lets you add ChatGPT on any website',
            // icon: 'https://www.svgrepo.com/show/120850/logo.svg',
            icon: logo2,
        },
        {
            title: 'Health & Hospitals',
            description: 'Chrome Extension that lets you add ChatGPT on any website',
            icon: logo1,
        },
        {
            title: 'TMK.co',
            description: 'Chrome Extension that lets you add ChatGPT on any website',
            icon: logo4,
        },
        {
            title: 'TMK.co',
            description: 'Chrome Extension that lets you add ChatGPT on any website',
            icon: logo2,
        },
    ];



    return (
        <div>
            {/* <!-- component --> */}
            <div className="bg-amber-600 p-4 pb-10 ">
                {/* <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
                    <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
                    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
                </div> */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                            <path fillRule="evenodd"
                                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                                clipRule="evenodd"></path>
                        </svg>
                        <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Our Work</h2>
                        <p className="text-gray-300">These are just a few of the sectors that we work in:</p>
                    </div>



                    <div className="my-16">
                        <div className="grid divide-x divide-y overflow-hidden rounded-3xl border text-gray-600  sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                            {/* <div className="grid divide-x bg-black divide-y overflow-hidden rounded-3xl border text-gray-600  sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"> */}
                            {sectors.map((sector, index) => (
                                <div key={index} className="group relative transition hover:z-[1] hover:shadow-2xl hover:shadow-white-600/10">
                                    {/* <div className="relative space-y-8 py-12 p-8">
                                        <img
                                            src={sector.icon}
                                            alt={sector.title}
                                            loading="lazy"
                                            className="w-12 h-12 rounded-full"
                                            style={{ color: 'transparent' }}
                                        />
                                        <div className="space-y-2">
                                            <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                                                {sector.title}
                                            </h5>
                                            <p className="text-gray-300">{sector.description}</p>
                                        </div>
                                    </div> */}

                                    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                        <Image width={400} height={100}
                                            src={sector.icon}
                                            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                                            alt="Louvre" />

                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <div className='p-3'>
                                                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                                                    {sector.title}
                                                </h5>
                                                <p className="text-gray-300">{sector.description}</p>
                                            </div>


                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default ServicesHome;
