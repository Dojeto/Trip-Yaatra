import React from "react";

const Hero = (props) => {
  const { imageUrl, tag, title } = props;
  return (
    <div className="max-w-full h-screen">
      <div
        className="relative bg-cover bg-center h-full overflow-hidden "
        style={{
          backgroundImage: `linear-gradient(rgba(80, 80, 80, 0.1) 67.4%, rgb(0, 0, 0) 90.97%),url(${imageUrl})`,
        }}
      >
        <div className=" flex w-screen h-screen tblt:flex-col">
          <div className=" w-1/2 h-screen flex justify-center items-center">
            <div className="w-3/5 h-1/3">
              <h2
                style={{
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                className="text-white text-6xl font-black uppercase tblt:text-4xl "
              >
                {title}
              </h2>
              <h2 className=" p-1 text-white text-md font-semibold tracking-wide">
                {tag}
              </h2>
            </div>
          </div>

          <div className="   w-1/2 flex justify-center items-end  tblt:w-full tblt:m-3">
            <div className=" h-1/2 w-2/3 flex items-center tblt:w-full tblt:h-fit">
              <div className="tblt:flex tblt:justify-around tblt:items-center tblt:w-full">
                <button className=" mt-2 mr-6 border-2 rounded-xl w-60 h-14 tblt:w-40 tblt:text-base sm:w-32  sm:text-sm text-black bg-white uppercase font-semibold text-lg hover:scale-105 transform transition-transform duration-300">
                  Get itinerary
                </button>
                <button className=" p-2 border-2 rounded-xl w-60 h-14  sm:w-32 tblt:w-40 tblt:text-base sm:text-sm text-black bg-white uppercase text-lg font-semibold hover:scale-105 transform transition-transform duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
