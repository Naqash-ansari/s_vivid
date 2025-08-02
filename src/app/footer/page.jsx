import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="relative py-10 bg-black">
            <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-whitecent-400"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="#000000"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
            </svg>

            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                    {/* Logo and About */}
                    <div className="md:max-w-md lg:col-span-2">
                        <div className="flex items-center">
                            <Image src="/sign-vivid.jpg" alt="logo" width={120} height={120} />
                        </div>
                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-white">
                                Sign Vivid specializes in custom signage and 3D lettering that brings your brand to life. We work with businesses of all sizes to create lasting impressions.
                            </p>
                            <p className="mt-4 text-sm text-white">
                                From illuminated storefront signs to bespoke interior branding, we deliver quality craftsmanship with timely service you can rely on.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        {/* Categories */}
                        <div>
                            <p className="font-semibold tracking-wide text-white">Category</p>
                            <ul className="mt-2 space-y-2">
                                <li><Link href="/product/SignProduct/1" className="text-white hover:text-amber-500">Shops Signs</Link></li>
                                <li><Link href="/product/SignProduct/2" className="text-white hover:text-amber-500">3D Signs</Link></li>
                                <li><Link href="/product/SignProduct/3" className="text-white hover:text-amber-500">Neon</Link></li>
                                <li><Link href="/product/SignProduct/4" className="text-white hover:text-amber-500">Projection Sign</Link></li>
                            </ul>
                        </div>

                        {/* Pages */}
                        <div>
                            <p className="font-semibold tracking-wide text-white">Pages</p>
                            <ul className="mt-2 space-y-2">
                                <li><Link href="/about" className="text-white hover:text-amber-500">About Us</Link></li>
                                <li><Link href="/gallery" className="text-white hover:text-amber-500">Gallery</Link></li>
                                <li><Link href="/contact" className="text-white hover:text-amber-500">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <p className="font-semibold tracking-wide text-white">Get in touch</p>
                            <ul className="mt-2 space-y-2">
                                <li><a href="tel:07876097226" className="text-white hover:text-amber-500">07876097226</a></li>
                                <li><a href="mailto:hello@signvivid.co.uk" className="text-white hover:text-amber-500">hello@signvivid.co.uk</a></li>
                            </ul>
                        </div>

                        {/* Products */}
                        {/* <div>
                            <p className="font-semibold tracking-wide text-white">Products</p>
                            <ul className="mt-2 space-y-2">
                                <li><span className="text-white">Custom Banners & Graphics</span></li>
                                <li><span className="text-white">Exhibits and Displays</span></li>
                                <li><span className="text-white">Exterior Signage</span></li>
                                <li><span className="text-white">Interior Decor Signs</span></li>
                            </ul>
                        </div> */}
                    </div>
                </div>

                {/* Footer Bottom Row */}
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-amber-500 sm:flex-row">
                    <p className="text-sm text-gray-100">© {new Date().getFullYear()} Sign Vivid. All rights reserved.</p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        {/* Facebook */}
                        <a href="https://facebook.com" className="hover:text-amber-500" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="#f8f8fa" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://instagram.com" className="hover:text-amber-500" aria-label="Instagram">
                            <svg viewBox="0 0 30 30" fill="#f8f8fa" className="h-6">
                                <circle cx="15" cy="15" r="4" />
                                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S22.552,9,22,9z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
