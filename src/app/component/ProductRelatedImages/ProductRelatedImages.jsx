import Image from 'next/image'

const ProductRelatedImages = ({ product_images }) => {
    return (
        <div className=''>
            <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-amber-600"></div>
                <h1 className="px-4 text-xl font-semibold text-gray-800">Our Projects</h1>
                <div className="flex-grow h-px bg-amber-600"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {product_images?.map((imgName, index) => (
                    <div className="text-center" key={index}>
                        <div className="relative w-full h-[200px]"> {/* Fixed height container */}
                            <Image
                                className="rounded-lg object-cover"
                                alt={`product ${index}`}
                                src={`/${imgName}`}
                                fill
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductRelatedImages
