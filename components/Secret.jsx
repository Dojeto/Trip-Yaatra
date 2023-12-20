import Image from "next/image";

const Secreats = () => {
  return (
    <div className=" mt-[70px] flex items-center justify-center mb-[70px] px-40 ">
      <div className="flex items-end justify-between flex-row text-center">
        <div className="flex flex-col items-center justify-start gap-1">
          <span className="text-2xl font-bold text-gray-600 md:text-xl sm:text-lg">
            Why TripYatra?
          </span>
          <span className="text-[50px] font-bold text-darkbl md:text-[30px] sm:text-[25px]">
            TripYatra’s Secret Sauce
          </span>
          <div className=" bg-darkvl w-[120px] h-[3px] "></div>
          <div className="flex mt-[50px] h-[100%] md:max-w-[900px]  md:h-[100%] sm:max-w-[800px]  xs:flex xs:flex-col xs:gap-4">
            <div className="max-w-md mx-auto relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg border border-gray-300 mr-4 md:w-[600px] sm:w-[600px] xs:w-[280px] xs:m-auto">
              <div style={{ width: "300px", height: "100%" }}>
                <Image
                  src="/assets/Home/sauceBg1.png"
                  alt="Background Image"
                  width={300}
                  height={300}
                />
              </div>

              <div className="absolute top-0 left-0 right-0 p-4 mt-4 ">
                <h2 className="text-2xl font-bold text-darkvl md:text-lg">
                  No Third Party Mess
                </h2>

                <p className="text-black mt-[50px] md:mt-[10px] ">
                  100 percent in-house operations for all trips! No third
                  parties involved, hence no fishy claims!
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg border border-gray-300 ml-4 md:w-[600px] sm:w-[600px] xs:w-[280px] xs:m-auto">
              <div style={{ width: "300px", height: "100%" }}>
                <Image
                  src="/assets/Home/sauceBg2.png"
                  alt="Background Image"
                  width={300}
                  height={300}
                />
              </div>
              <div className="absolute top-0 left-0 right-0 p-4 mt-4 ">
                <h2 className="text-2xl font-bold text-darkvl md:text-lg">
                  Transparency & Security
                </h2>
                <p className="text-black mt-[25px] md:mt-[10px]">
                  Real time monitoring of all trips by ground team! All routes
                  and weather
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg border border-gray-300 ml-4 md:w-[600px] sm:w-[600px] xs:w-[280px] xs:m-auto">
              <div style={{ width: "300px", height: "100%" }}>
                <Image
                  src="/assets/Home/sauceBg3.png"
                  alt="Background Image"
                  width={300}
                  height={300}
                />
              </div>
              <div className="absolute top-0 left-0 right-0 p-4 mt-4 ">
                <h2 className="text-2xl font-bold text-darkvl md:text-lg">
                  Co-Travelers Filtering
                </h2>
                <p className="text-black mt-[50px] md:mt-[10px]">
                  Multi-step filtering to bring only like-minded people
                  together!
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg border border-gray-300 ml-4 md:w-[600px] sm:w-[600px] xs:w-[280px] xs:m-auto">
              <div style={{ width: "300px", height: "100%" }}>
                <Image
                  src="/assets/Home/sauceBg4.png"
                  alt="Background Image"
                  width={300}
                  height={300}
                />
              </div>
              <div className="absolute top-0 left-0 right-0 p-4 mt-4 ">
                <h2 className="text-2xl font-bold text-darkvl md:text-lg">
                  One Stop Hassle Free Experience
                </h2>
                <p className="text-black mt-[25px] md:mt-[10px]">
                  Comfortable stays, trained drivers, hospitable staff and
                  friendly trip leaders put together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secreats;
