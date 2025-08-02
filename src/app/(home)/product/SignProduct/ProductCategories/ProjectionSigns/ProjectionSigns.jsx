'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import ProductRelatedImages from '../../../../../component/ProductRelatedImages/ProductRelatedImages';


const StarRating = ({ rating }) => {
    /* same as before */
};

const imagesproduct = ['op1.jpg', 'op2.jpg', 'op3.jpg', 'op4.webp', 'op6.jpg', 'op5.webp']


const images = [
    {
        id: 1,
        src: '/p1.jpg',
        alt: 'Projection Sign Front View',
        rating: 4.5,
        price: 249.99,
        description: 'High-quality projection sign, perfect for storefronts with neon illumination.',
    },
    {
        id: 2,
        src: '/p2.jpg',
        alt: 'Projection Sign Side View',
        rating: 4.2,
        price: 239.99,
        description: 'Side angle showing the wall mounting bracket and illuminated features.',
    },
    {
        id: 3,
        src: '/p3.jpg',
        alt: 'Projection Sign Night View',
        rating: 4.8,
        price: 269.99,
        description: 'Bright neon glow for nighttime visibility, durable weatherproof design.',
    },
    {
        id: 4,
        src: '/p4.jpg',
        alt: 'Projection Sign Installation',
        rating: 4.3,
        price: 259.99,
        description: 'Easy wall mounting, includes hardware and installation guide.',
    },
    {
        id: 5,
        src: '/p5.jpg',
        alt: 'Projection Sign Close-up',
        rating: 4.7,
        price: 279.99,
        description: 'Close-up of the LED neon tubes with vibrant colors and craftsmanship.',
    },
];

const ProjectionSignProduct = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [quantity, setQuantity] = useState(1);

    const decrement = () => {
        setQuantity((q) => (q > 1 ? q - 1 : 1)); // quantity minimum 1
    };

    const increment = () => {
        setQuantity((q) => q + 1);
    };

    const onQuantityChange = (e) => {
        const val = parseInt(e.target.value);
        if (!isNaN(val) && val > 0) {
            setQuantity(val);
        } else if (e.target.value === '') {
            setQuantity(''); // allow empty input for editing
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 mb-18 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {/* Left grid unchanged */}
                <div>
                    <div className="border-4 border-amber-500 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-[400px] object-contain bg-black"
                        />
                    </div>
                    <div className="flex mt-4 space-x-4 justify-center">
                        {images.map((img) => (
                            <button
                                key={img.id}
                                onClick={() => setSelectedImage(img)}
                                className={`border-2 rounded-md overflow-hidden focus:outline-none ${selectedImage.id === img.id
                                    ? 'border-amber-500'
                                    : 'border-transparent hover:border-amber-400'
                                    }`}
                                aria-label={`Select ${img.alt}`}
                            >
                                <img src={img.src} alt={img.alt} className="w-20 h-20 object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right grid: with quantity selector */}
                <div className="flex flex-col justify-between space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">{selectedImage.alt}</h2>
                        <StarRating rating={selectedImage.rating} />

                        <p className="mt-4 text-gray-700 leading-relaxed text-lg font-medium">
                            Close-up of the LED neon tubes showcasing:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                            <li>🎨 <strong>Vibrant Colors:</strong> Bright and consistent illumination with rich neon hues.</li>
                            <li>⚙️ <strong>Craftsmanship:</strong> Precision-engineered tubes for durability and style.</li>
                            <li>💡 <strong>Energy Efficient:</strong> Low power consumption with high brightness output.</li>
                            <li>💧 <strong>Weatherproof:</strong> Designed to withstand outdoor conditions with waterproof sealing.</li>
                            <li>🔧 <strong>Easy Installation:</strong> Comes with mounting hardware and clear instructions.</li>
                        </ul>

                        <div className="flex items-center justify-between mt-6">
                            <p className="text-3xl font-bold text-amber-600">${selectedImage.price.toFixed(2)}</p>
                            <div className="flex items-center space-x-2">
                                {/* Minus Button */}
                                <button
                                    onClick={decrement}
                                    className="w-8 h-8 bg-amber-500 text-white rounded-md flex items-center justify-center font-bold text-lg hover:bg-amber-600 transition"
                                    aria-label="Decrease quantity"
                                >
                                    –
                                </button>

                                {/* Quantity Input */}
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={onQuantityChange}
                                    className="w-16 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    aria-label="Quantity"
                                />

                                {/* Plus Button */}
                                <button
                                    onClick={increment}
                                    className="w-8 h-8 bg-amber-500 text-white rounded-md flex items-center justify-center font-bold text-lg hover:bg-amber-600 transition"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="bg-amber-500 mt-16 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold shadow-md transition-colors duration-300 inline-block text-center"
                        >
                            Contact
                        </Link>
                    </div>
                </div>


            </div>

            <ProductRelatedImages product_images={imagesproduct} />
        </div>
    );
};

export default ProjectionSignProduct;
