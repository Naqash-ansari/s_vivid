"use client"

import '../../../assets/productList/pro.css'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { products } from '../../../api/products/list';


const ProductList = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

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
        <div className='text-center py-16 relative'>

            {/* <h1 className="text-3xl font-bold px-28 dark:text-white  iansui-regular">Elevate Your Brand with<span className='underline text-amber-600'> Premium Signage</span> —<span className='underline text-amber-600'> Design Your Own</span> or Browse Stunning Templates to Get Inspired!</h1> */}
            <h1 className="font-bold dark:text-white iansui-regular
  text-xl px-4
  sm:text-2xl sm:px-8
  md:text-3xl md:px-20
  lg:text-4xl lg:px-28
  xl:text-5xl xl:px-32
">
                Elevate Your Brand with
                <span className="underline text-amber-600"> Premium Signage</span> —
                <span className="underline text-amber-600"> Design Your Own</span> or Browse Stunning Templates to Get Inspired!
            </h1>

            <main className="main bd-grid py-6 z-50">

                {currentProducts.map((product) => (
                    <Link
                        href={`/product/SignProduct/${product.id}`}
                        key={product.id}
                    >
                        <article className="card shadow-2xl" >
                            <div className="card__img">
                                <Image
                                    src={product.image}
                                    alt="product image"
                                    width={600}
                                    height={600}
                                    // fill
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="card__name">
                                <p>{product.name}</p>
                            </div>
                            <div className="card__precis">

                                <div>
                                    <span className="card__preci card__preci--before">$990.00</span>
                                    <span className="card__preci card__preci--now">{product.name}</span>

                                </div>
                            </div>
                        </article>
                    </Link>
                ))}


                {/* end here */}


            </main>


            <div className="row flex text-center justify-center ">
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
                        // className="rounded-md rounded-r-none rounded-l-none border border-r-0 border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        className={`px-4 py-2 mx-1 ${currentPage === page + 1 ? 'bg-amber-600' : 'bg-gray-300'} text-white rounded`}
                        type="button"
                        onClick={() => handlePageChange(page + 1)} // Handle page change
                    >
                        {page + 1}
                    </button>
                ))}

                {/* Next button */}
                <button
                    className="rounded-md mx-1 rounded-l-none border border-amber-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-amber-600 hover:text-white hover:bg-amber-600 hover:border-amber-600 focus:text-white focus:bg-amber-600 focus:border-bg-amber-600 active:border-bg-amber-600 active:text-white active:bg-amber-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)} // Navigate to the next page
                    disabled={currentPage === totalPages} // Disable if on the last page
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {/* <ImgIssue /> */}
        </div>
    )
}

export default ProductList