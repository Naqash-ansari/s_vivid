import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FooterLogo = () => {
    return (
        <footer className="bg-orange-500 text-black py-10 px-6 md:px-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

                {/* Left - Brand Name */}
                <div>
                    <h1 className="text-2xl font-bold">W. Scott</h1>
                </div>

                {/* Middle - Links */}
                <div className="flex flex-col space-y-2">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Accessibility Statement</a>
                </div>

                {/* Right - Contact Details */}
                <div className="flex flex-col space-y-2">
                    <p>123-456-7890</p>
                    <p>info@mysite.com</p>
                    <p>500 Terry Francine St.</p>
                    <p>San Francisco, CA 94158</p>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-end mt-6 space-x-4">
                <a href="#" className="bg-black text-white p-2 rounded-full"><FaFacebookF size={18} /></a>
                <a href="#" className="bg-black text-white p-2 rounded-full"><FaInstagram size={18} /></a>
                <a href="#" className="bg-black text-white p-2 rounded-full"><FaLinkedinIn size={18} /></a>
            </div>

            {/* Copyright Text */}
            <div className="text-center mt-6 text-sm">
                © 2035 by W. Scott. Powered and secured by <a href="#" className="underline">Wix</a>
            </div>
        </footer>
    );
};

export default FooterLogo;
