import Image from "next/image";
const Looking = () => {
  return (
    <div className="mt-[50px]">
      <div className="relative">
        {/* Lower Image */}
        <Image
          src="/assets/cta-banner.png"
          alt="Background Image"
          width={1000}
          height={1000}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {/* Content inside  */}

          <div
            className="w-[1100px] h-[300px] flex justify-center items-center relative"
            style={{ backgroundColor: "rgba(5, 103, 125, 0.9)" }}
          >
            <div className="text-center">
              <h1 className="text-4xl text-white font-bold">
                Didn’t find what you were looking for?
              </h1>
              <h4 className="text-lg text-white font-semibold">
                Connect with our experts! Get the best itineraries and offers!
              </h4>
              <div className="mt-[25px]">
                <button className="px-10 py-3 bg-yellow-400 rounded-[40px] text-black font-semibold text-2xl   focus:outline-none focus:ring focus:ring-blue-200">
                  Connect Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Looking;
