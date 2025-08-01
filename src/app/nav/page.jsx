"use client";
import { useEffect, useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FaBars, FaXmark } from "react-icons/fa6";
import { Dancing_Script } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation'



const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700'],
});



const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/about', current: false },
    // { name: 'Services', href: '/services', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
    // { name: 'Portfolio', href: '/portfolio', current: false },
    // { name: 'Porfolio', href: '/portfolio', current: false, newTab: true },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Page() {
    const [isScrolled, setIsScrolled] = useState(false);
    let route = usePathname()
    // let route_name = route.toUpperCase()

    // console.log('hello :', xx)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // Navbar moves down after scroll
            } else {
                setIsScrolled(false); // Navbar back to top when at the top
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='h-24'>
            <Disclosure as="nav" className={`shadow-2xl fixed w-full z-50 transition-all py-4 duration-300 ${isScrolled ? 'bg-white py-6' : `${route !== '/' ? 'bg-white' : 'bg-white'}`}`}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className=" flex h-16 items-center justify-between">
                        {/* <div className="relative flex h-16 items-center justify-between"> */}
                        {/* Logo */}
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <h1 className={`text-black font-bold text-4xl ${dancingScript.className}`}>
                                    Sign <sup className='underline text-amber-600'>Vivid</sup>
                                </h1>
                                {/* <Image src={tara} alt='logo' width={150} height={150} /> */}
                            </div>
                        </div>

                        {/* Menu Icons (Mobile) */}
                        <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className=" inset-y-0 right-0 flex items-center sm:hidden">
                                {/* <div className="absolute inset-y-0 right-0 flex items-center sm:hidden"> */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                                    <FaBars aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                    <FaXmark aria-hidden="true" className="hidden size-6 group-data-open:block" />
                                </DisclosureButton>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            target={item.newTab ? "_blank" : "_self"}
                                            className={classNames(
                                                item.href.toLowerCase() === route.toLowerCase() ? 'font-extrabold border border-amber-600 text-amber-600' : 'text-black border border-white hover:text-amber-600 hover:border hover:border-amber-600',
                                                'rounded-md px-3 py-2 text-sm font-bold uppercase nav_btn ',
                                            )}
                                        >
                                            {item.name}
                                        </Link>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Mobile Menu */}
                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.href.toLowerCase() === route.toLowerCase() ? 'font-extrabold border border-amber-600 text-amber-600' : 'text-black border border-white hover:text-amber-600 hover:border hover:border-amber-600',
                                    'rounded-md px-3 py-2 text-sm font-bold uppercase nav_btn block',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    );
}
