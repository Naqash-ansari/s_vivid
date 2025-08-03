import Image from "next/image";

const CardWork = () => {
    let teamWork = [
        '/team2.jpg',
        '/team1.jpg',
        '/team3.jpg',
    ];

    return (
        <div className="px-4 py-16 sm:py-20 lg:py-28 bg-[#22324c]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Image Section */}
                    <div>
                        <Image
                            src='/team4.png' // cyclically use images
                            alt={`Teamwork Image`}
                            // layout="fill"
                            objectFit="cover"
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                    </div>
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item, index) => (
                            <div key={item}
                                className={`bg-amber-600 rounded-lg p-2 text-white text-center shadow-lg ${index === 1 ? 'animate-bounce delay-40' : ''}`}
                            >
                                <div className="relative w-full h-86 rounded-lg overflow-hidden ">
                                    <Image
                                        src={teamWork[index % teamWork.length]} // cyclically use images
                                        alt={`Teamwork Image ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div> */}

                    {/* Text Section */}
                    <div className="text-center md:text-left text-white">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">The Power of <span className="text-amber-600">Teamwork</span></h2>
                        <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
                            Great achievements are never accomplished alone. Teamwork fuels creativity, enhances productivity,
                            and drives success. When individuals collaborate with trust and a shared vision, they turn challenges
                            into opportunities and ideas into reality.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardWork;
