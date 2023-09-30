import Image from "next/image";
const Looking = () => {
  return (
    <div className="sm:w-full relative">
      {/* Lower Image */}
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
        {/* Content inside */}
        <div className="w-full h-[300px] sm:w-[500px] sm:h-[150px] md:w-[600px] md:h-[200px] lg:w-[800px] lg:h-[250px] xl:w-[1000px] xl:h-[300px] 2xl:w-[1200px] 2xl:h-[350px] flex justify-center items-center relative" style={{ backgroundColor: "rgba(5, 103, 125, 0.9)" }}>
  <div className="text-center">
    <h1 className="text-4xl text-white font-bold">
      Didn’t find what you were looking for?
    </h1>
    <h4 className="text-lg text-white font-semibold">
      Connect with our experts! Get the best itineraries and offers!
    </h4>
    <div className="mt-6">
      <button className="px-10 py-3 bg-yellow-400 rounded-[40px] text-black font-semibold text-2xl focus:outline-none focus:ring focus:ring-blue-200">
        Connect Now
      </button>
    </div>
  </div>
</div>

      </div>
    </div>


  );
};
export default Looking;
