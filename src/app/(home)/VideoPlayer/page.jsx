"use client";

import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    return (
        <figure className="relative transition-all duration-300 cursor-pointer filter grayscale-50 hover:grayscale-0">
            <div className="w-full h-screen p-10 flex items-center justify-center text-center sm:h-[500px] md:h-[450px] lg:h-[500px] xl:h-[650px] relative overflow-hidden">
                <ReactPlayer
                    url="/vivid.mp4"
                    playing={true}
                    muted={true}
                    loop={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0 rounded-2xl"
                />
            </div>
        </figure>
    );
};

export default VideoPlayer;
