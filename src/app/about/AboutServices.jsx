"use client";

import Image from "next/image";
import services_series from '../assets/services/services_series.jpg'
import islamic_box from './images/images.jpg'
import sign_b from './images/imag.jpg'
import ig2 from './images/images11.jpg'
import Pizza_box from '../assets/services/pizza1.jpg'


const AboutServices = () => {
    const features = [
        {
            title: "Custom settings",
            img: "https://www.svgrepo.com/show/530444/availability.svg",
            desc: "We offer advanced customization. You can freely combine options like roles, languages, publish, tones, lengths, and formats.",
        },
        {
            title: "Free trial",
            img: "https://www.svgrepo.com/show/530440/machine-vision.svg",
            desc: "We offer a free trial service without login. We provide many payment options including pay-as-you-go and subscription.",
            link: "/pricing",
        },
        {
            title: "90+ templates",
            img: "https://www.svgrepo.com/show/530450/page-analysis.svg",
            desc: "We offer many templates covering areas such as writing, education, lifestyle, and creativity to inspire your potential.",
            link: "/templates",
        },
        {
            title: "Use Anywhere",
            img: "https://www.svgrepo.com/show/530453/mail-reception.svg",
            desc: "Our product is compatible with multiple platforms including Web, Chrome, Windows, and Mac, so you can use it anywhere.",
            link: "/download",
        },
    ];

    return (
        <section className=" px-2 py-26">
            <div id="features" className="mx-auto max-w-6xl">
                <p className="text-center text-base font-semibold leading-7 text-primary-500">Features</p>
                <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl pb-6">
                    Eye-catching signs for your shop
                </h2>
                <div className="flex gap-4">

                    <div>
                        <ul className="mt-16 grid grid-cols-1 gap-4 text-center text-slate-700 md:grid-cols-2">
                            {/* {features.map((feature, index) => (
                                <li key={index} className="rounded-xl bg-[#22324c] hover:bg-amber-600 text-white shadow-lg px-6 py-8">
                                    {feature.link ? (
                                        <a href={feature.link} className="group">
                                            <Image src={feature.img} alt={feature.title} width={40} height={40} className="mx-auto" />
                                            <h3 className="my-3 font-display font-medium group-hover:text-primary-500 ">{feature.title}</h3>
                                            <p className="mt-1.5 text-sm leading-6 text-secondary-500">{feature.desc}</p>
                                        </a>
                                    ) : (
                                        <>
                                            <Image src={feature.img} alt={feature.title} width={40} height={40} className="mx-auto" />
                                            <h3 className="my-3 font-display font-medium">{feature.title}</h3>
                                            <p className="mt-1.5 text-sm leading-6 text-secondary-500">{feature.desc}</p>
                                        </>
                                    )}
                                </li>
                            ))} */}
                            <Image src={islamic_box} width={290} height={220} className="boj-cover" alt='ser' />
                            <Image src={ig2} width={290} height={'auto'} className="boj-cover" alt='ser' />
                            <Image src={Pizza_box} width={280} height={'auto'} className="boj-cover" alt='ser' />
                            <Image src={sign_b} width={280} height={'auto'} className="boj-cover" alt='ser' />
                            {/* <Image src={islamic_box} width={500} height={500} className="boj-cover" />
                            <Image src={islamic_box} width={500} height={500} className="boj-cover" />
                            <Image src={islamic_box} width={500} height={500} className="boj-cover" /> */}
                        </ul>
                    </div>

                    <div className="image object-center text-center">
                        {/* <Image width={600} height={1000} src={services_series} alt='about' /> */}
                        <Image
                            width={500}
                            height={500}
                            src={services_series}
                            alt='about'
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutServices;
