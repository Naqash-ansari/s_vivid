"use client";

import { useEffect, useState } from "react";

const MapLocation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-amber-600 p-2 mt-50 md:mt-80 pb-30">
      <div className="">
        <div className="p-4 sm:p-6 lg:px-8 mx-auto max-w-7xl">
          {/* <h2>Map Location</h2> */}
          {isClient ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19110.243240642!2d-4.138598399999999!3d53.2217856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1743118673134!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] mt-[-160px] sm:mt-[-260px]"
            ></iframe>

          ) : (
            <p className="text-white text-center">Loading map...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapLocation;
