import Image from "next/image";
const Looking = () => {
  return (
    <div className="mt-[20px] py-16 flex flex-col justify-between items-center w-full h-72  bg-darkbl relative">
      <Image
        src="/assets/abstract-wavy.png"
        width={1920}
        height={288}
        className="absolute object-cover left-0 right-0 opacity-20  top-0 z-0 select-none pointer-events-none"
      />
      <div className=" text-4xl text-white font-extrabold z-10 xs:text-2xl">
        Couldn't locate what you had in mind?
      </div>
      <div className="  text-white z-10 ">
        Reach out to our knowledgeable team for top-notch itineraries and
        exclusive deals!
      </div>
      <div className=" z-10 ">
        <button className="px-10 py-3 bg-yellow-400 z-10  md:px-6 md:py-1 sm:px-2 sm:py-[1px] sm:text-xs md:text-base rounded-[40px] text-black font-semibold text-2xl focus:outline-none focus:ring focus:ring-blue-200 xs:px-2 xs:py-[1px] xs:text-xl">
          Connect Now
        </button>
      </div>
      {/* <div className="sm:w-full relative">
        <div>
          <Image
            src="/assets/Home/cta-banner.png"
            alt="Background Image"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div
            className="w-[1200px] h-[300px] sm:w-[400px] sm:h-[100px] md:w-[700px] md:h-[150px] xs:w-[310px] xs:h-[100px]  flex justify-center items-center relative"
            style={{ backgroundColor: "rgba(5, 103, 125, 0.9)" }}
          >
            <div className="text-center ">
              <h1 className="text-4xl text-white font-bold md:text-2xl sm:text-lg xs:text-base">
                Didn’t find what you were looking for?
              </h1>
              <h4 className="text-lg text-white font-semibold md:text-sm sm:text-[10px]">
                Connect with our experts! Get the best itineraries and offers!
              </h4>
              <div className="mt-6 sm:mt-2">
                <button className="px-10 py-3 bg-yellow-400 md:px-6 md:py-1 sm:px-2 sm:py-[1px] sm:text-xs md:text-base rounded-[40px] text-black font-semibold text-2xl focus:outline-none focus:ring focus:ring-blue-200">
                  Connect Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Looking;
