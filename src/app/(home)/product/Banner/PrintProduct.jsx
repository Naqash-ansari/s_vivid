"use client"

import { useState } from 'react';
import Image from 'next/image';

import img1 from '../../../assets/productList/sb1.webp';
import img2 from '../../../assets/productList/sb2.jpg';
import img3 from '../../../assets/productList/sb3.jpg';

const PrintProduct = () => {
    const products = [
        {
            title: "Tailwind CSS Email Design Kit",
            mainImage: img1,
            subImage1: img2,
            subImage2: img3,
        },
        {
            title: "React UI Components Kit",
            mainImage: img1,
            subImage1: img1,
            subImage2: img1,
        },
        {
            title: "Next.js Starter Template",
            mainImage: img1,
            subImage1: img1,
            subImage2: img1,
        },
        {
            title: "Tailwind Admin Dashboard",
            mainImage: img1,
            subImage1: img1,
            subImage2: img1,
        },
        {
            title: "Product 5",
            mainImage: img1,
            subImage1: img2,
            subImage2: img3,
        },
        {
            title: "Product 6",
            mainImage: img1,
            subImage1: img1,
            subImage2: img1,
        },
        // Add more products if needed
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Calculate the index of the first and last item to be shown on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Slice the products array to show only the current page items
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="bg-white py-16 text-center">
            {/* Responsive Grid Layout */}
            <h1 className="text-3xl font-bold text- dark:text-white  iansui-regular">Printed Products</h1>

            <div className="main bd-grid py-6">
                {currentProducts.map((product, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                        {/* Image Grid */}
                        <div className="flex gap-2">
                            <div className="w-2/3">
                                <div className="h-82  rounded flex items-center justify-center object-cover">
                                    <Image
                                        src={product.mainImage}
                                        alt="Product"
                                        className="h-full w-full object-cover p-1 rounded"

                                    />

                                </div>
                            </div>
                            <div className="w-1/3 flex flex-col gap-2">
                                <div className="h-40  rounded flex items-center justify-center">
                                    <Image
                                        height={900}
                                        width={200}
                                        src={product.subImage1}
                                        alt="Product"
                                        className="h-full w-full object-cover p-1 rounded"
                                    />
                                </div>
                                <div className="h-40  rounded flex items-center justify-center">
                                    <Image
                                        height={200}
                                        width={200}
                                        src={product.subImage2}
                                        alt="Product"
                                        className="h-full w-full object-cover p-1 rounded"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Title */}
                        <h3 className="text-sm font-bold mt-4 bg-amber-600 text-white p-4 rounded transition-all transform border hover:border-amber-600 hover:text-amber-600 hover:bg-white hover:-translate-y-2 ease-in-out">
                            {product.title}
                        </h3>
                        {/* <h3 className="text-sm font-bold mt-4 bg-amber-300 p-6 rounded text-gray-700">{product.title}</h3> */}
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-center space-x-4">
                <div className="row flex">
                    {/* Prev button */}
                    <button
                        className="rounded-md mx-1 rounded-r-none border border-r-0 border-amber-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-amber-600 hover:text-white hover:bg-amber-600 hover:border-ambg-amber-600 focus:text-white focus:bg-amber-600 focus:border-ambg-amber-600 active:border-ambg-amber-600 active:text-white active:bg-amber-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={() => handlePageChange(currentPage - 1)} // Navigate to the previous page
                        disabled={currentPage === 1} // Disable if on the first page
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Dynamically generated page buttons */}
                    {[...Array(totalPages).keys()].map((page) => (
                        <button
                            key={page}
                            // className="rounded-md rounded-r-none rounded-l-none border border-r-0 border-amber-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-amber-600 hover:text-white hover:bg-amber-600 hover:border-ambg-amber-600 focus:text-white focus:bg-amber-600 focus:border-ambg-amber-600 active:border-ambg-amber-600 active:text-white active:bg-amber-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            className={`px-4 py-2 mx-1 ${currentPage === page + 1 ? 'bg-amber-600' : 'bg-gray-300'} text-white rounded`}
                            type="button"
                            onClick={() => handlePageChange(page + 1)} // Handle page change
                        >
                            {page + 1}
                        </button>
                    ))}

                    {/* Next button */}
                    <button
                        className="rounded-md mx-1 rounded-l-none border border-amber-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-amber-600 hover:text-white hover:bg-amber-600 hover:border-ambg-amber-600 focus:text-white focus:bg-amber-600 focus:border-ambg-amber-600 active:border-ambg-amber-600 active:text-white active:bg-amber-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={() => handlePageChange(currentPage + 1)} // Navigate to the next page
                        disabled={currentPage === totalPages} // Disable if on the last page
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

            </div>
        </div >
    );
};

export default PrintProduct;
