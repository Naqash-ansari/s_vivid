import React from "react";
import { FaCogs, FaBoxOpen, FaSmile, FaShippingFast, FaLightbulb, FaTools, FaMagic } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
    { icon: <FaTools />, title: "Custom Neon Craftsmanship" },
    { icon: <FaShippingFast />, title: "Delivered to Your Doorstep" },
    { icon: <FaCogs />, title: "Durability You Can Trust" },
    { icon: <FaMagic />, title: "Illuminate on Demand" },
    { icon: <FaLightbulb />, title: "Energy-Smart Luminance" },
    { icon: <FaSmile />, title: "Vivid Neon Brilliance" },
];

const testimonials = [
    {
        name: "allimariedavis1",
        date: "03 Feb, 2023",
        review:
            "My boyfriend absolutely LOVES this. Awesome quality, super bright color, easy settings, and fast shipping!",
    },
    {
        name: "Mikylea Tedder",
        date: "02 Dec, 2022",
        review:
            "Great product for my daughter’s dorm! Anna helped us pick a perfect font and color. We’re very happy!",
    },
    {
        name: "Nicole Bailey",
        date: "14 Jun, 2023",
        review:
            "Amazing sign for our wedding! It arrived just in time and looks beautiful. Now hanging in our garage!",
    },
];

const NeonOnDemand = () => {
    return (
        <div className="p-6 space-y-16 mt-10">
            {/* Header */}
            <section className="text-center">
                <motion.h1 className="text-4xl font-bold text-amber-500" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                    Welcome To On Demand Neon
                </motion.h1>
                <p className="text-lg mt-2">Make Your Own Neon Sign in 3 Steps</p>
            </section>

            {/* Steps Section */}
            <section className="grid md:grid-cols-3 gap-6">
                {[
                    { icon: <FaCogs />, title: "Step 1: Get a Free Quote", desc: "Click the Contact us button and our team will review your design and give you a quote." },
                    { icon: <FaMagic />, title: "Step 2: Customize It", desc: "Approve the artwork, we’ll begin production. Delivery in 2–3 weeks." },
                    { icon: <FaBoxOpen />, title: "Step 3: Get It", desc: "Unbox, hang it up, plug in, and light it up. Neon signs are easy to install." },
                ].map((step, i) => (
                    <motion.div
                        key={i}
                        className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg"
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="text-amber-500 text-3xl mb-3">{step.icon}</div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="mt-2 text-sm text-gray-700">{step.desc}</p>
                    </motion.div>
                ))}
            </section>

            {/* Why Choose Us */}
            <section>
                <h2 className="text-2xl font-bold mb-6 text-amber-500">Why Choose Us for Neon Signs?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-6 rounded-lg shadow border border-amber-500 hover:border-amber-500"
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-amber-500 text-3xl mb-2">{item.icon}</div>
                            <h4 className="font-semibold text-lg">{item.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">Lacus laoreet in non egestas erat. Ultrices pulvinar cras ut aliquet.</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section>
                <h2 className="text-2xl font-bold mb-4 text-amber-500">What Our Customers Say</h2>
                <div className="space-y-4">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-gray-50 border-l-4 border-amber-500 p-4 rounded shadow"
                            whileHover={{ scale: 1.02 }}
                        >
                            <p className="font-semibold">{item.name} - {item.date}</p>
                            <p className="mt-2 text-sm text-gray-700">{item.review}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default NeonOnDemand;
