"use client"

import { TypeAnimation } from "react-type-animation";
import ReactPlayer from 'react-player'

// Render a YouTube video player

const ImageCard = () => {
    return (
        <figure className="relative transition-all duration-300 cursor-pointer filter grayscale-50 hover:grayscale-0">

            <div className="w-full h-screen p-10 items-center justify-center flex text-center sm:h-[500px] md:h-[450px] lg:h-[500px] xl:h-[650px] relative overflow-hidden">
                {/* <Image
                    src={table_res1}
                    alt="image description"
                    layout="fill"
                    objectFit="cover"
                    className=""
                />
                Gradient Overlay
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50"></div> */}


                <ReactPlayer
                    url='https://www.youtube.com/watch?v=3lLfXX9Xu-0&ab_channel=BLMGROUP'
                    playing={true}
                    muted={true}
                    loop={true}
                    controls={true}
                    width={"100%"}
                    height={"100%"}
                    // style={{ width: '100%', height: '100%' }}
                    className="absolute top-0 left-0 rounded-2xl"
                />

            </div>

            <figcaption className="absolute lg:p-34 p-8 xs:p-10 top-1/2 transform -translate-y-1/2 text-lg text-white w-full flex flex-col gap-4">
                <p className="text-4xl font-bold"></p>
                <p>Your Vision, Our skills</p>

                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'Turning Vision Into Reality Mice',
                        1000,
                        'Turning Vision Into Reality Hamsters',
                        1000,
                        'Turning Vision Into Reality Guinea Pigs',
                        1000,
                        'Turning Vision Into Reality Chinchillas',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />

            </figcaption>

        </figure>

    );
};

export default ImageCard;
