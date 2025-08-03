"use client";

import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    return (
        <figure className="relative transition-all duration-300 cursor-pointer filter grayscale-50 hover:grayscale-0">
            <div className="
        w-full 
        p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12
        flex items-center justify-center text-center
        h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[650px]
        relative overflow-hidden
      ">
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
