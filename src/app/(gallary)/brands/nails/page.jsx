import Image from 'next/image';

const page = () => {
    let product_images = [
        'mavi.jpg',
        'nail1.jpg',
        'nail2.jpg',
        'nail3.jpg',
        'nail5.avif',
        'nail14.jpg'
    ];


    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-amber-600"></div>
                <h1 className="px-4 text-xl font-semibold text-gray-800">Nails Shops</h1>
                <div className="flex-grow h-px bg-amber-600"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {product_images?.map((imgName, index) => (
                    <div className="text-center" key={index}>
                        <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                            <Image
                                className="object-cover"
                                alt={`product ${index}`}
                                src={`/${imgName}`}
                                fill
                                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 50vw,
                       (max-width: 1024px) 33vw,
                       25vw"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;
