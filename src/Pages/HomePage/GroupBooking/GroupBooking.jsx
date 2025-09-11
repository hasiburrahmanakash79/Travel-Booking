import { useState } from "react";

const GroupBooking = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOnClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full bg-[#DCF4D2]">
      <div className="container mx-auto px-5 py-12 md:py-16 lg:py-20 xl:py-24 flex flex-col lg:flex-row justify-between items-center gap-8 text-[#1A1A1A]">
        {/* Heading & Button */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-snug">
            Know more about Group Booking
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg">
            Watch a short video to discover smarter, faster & cheaper hotels for
            your upcoming tours.
          </p>
          <div className="mt-6 md:mt-10">
            <button
              onClick={handleOnClick}
              className="text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-14 lg:px-[70px] py-2 sm:py-3 md:py-[11px] bg-[#7ED957] rounded-3xl"
            >
              Watch
            </button>
          </div>
        </div>

        {/* Video */}
        <div className="flex-1 aspect-video overflow-clip rounded-2xl w-full max-w-full">
          {!isPlaying ? (
            <div
              onClick={handleOnClick}
              className="w-full h-full cursor-pointer relative"
            >
              <img
                src="/Images/groupBooking.jpg"
                alt="Thumbnail"
                className="w-full h-full object-cover blur-[1px]"
              />
              <img
                src="/Icons/autoPlay.png"
                alt="Auto Play Icon"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 sm:w-16 md:w-20"
              />
            </div>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupBooking;
