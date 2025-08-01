import Image from "next/image";
import teamWork from '../../assets/gallery/team_work.gif';

const TeamWork = () => {
    return (
        <div className="px-4 py-16 sm:py-20 lg:py-24 bg-[#22324c]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Image Section */}
                    <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
                        <Image
                            src={teamWork}
                            alt="Teamwork Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="text-center md:text-left text-white">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">The Power of Teamwork</h2>
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

export default TeamWork;
