import Image from "next/image";

const Secreats = () => {
  return (
    <div className=" mt-[70px] flex items-center justify-center mb-[70px]">
      <div className="flex items-end justify-between flex-row text-center">
        <div className="flex flex-col items-center justify-start gap-1">
          <span className="text-2xl font-bold text-gray-600">
            Why TripYatra?
          </span>
          <span className="text-[50px] font-bold text-darkvl">
            TripYatra’s Secret Sauce
          </span>
          <div className=" bg-darkvl w-[120px] h-[3px] "></div>
          <div className="flex mt-[50px] h-[100%]">
            <div className="max-w-md mx-auto relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg border border-gray-300 mr-4">
              <div style={{ width: "300px", height: "100%" }}>
                <Image
                  src="/assets/sauceBg1.png"
                  alt="Background Image"
                  width={300}
                  height={300}                 
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>

              <div className="absolute top-0 left-0 right-0 p-4 mt-4 ">
                <h2 className="text-2xl font-bold text-darkvl">
                  No Third Party Mess
                </h2>
                <p className="text-black mt-[50px]">
                  100 percent in-house operations for all trips! No third
                  parties involved, hence no fishy claims!
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg border border-gray-300 ml-4">
              <div style={{ width: "300px", height: "100%" }}>
                <Image
                  src="/assets/sauceBg2.png"
                  alt="Background Image"
                  width={300}
                  height={300}
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="absolute top-0 left-0 right-0 p-4 mt-4 ">
                <h2 className="text-2xl font-bold text-darkvl">
                  Transparency & Security
                </h2>
                <p className="text-black mt-[25px]">
                  Real time monitoring of all trips by ground team! All routes
                  and weather conditions are accurately updated!
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg border border-gray-300 ml-4">
              <div style={{ width: "300px", height: "100%" }}>
                <Image
                  src="/assets/sauceBg3.png"
                  alt="Background Image"
                  width={300}
                  height={300}
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="absolute top-0 left-0 right-0 p-4 mt-4 ">
                <h2 className="text-2xl font-bold text-darkvl">
                  Co-Travelers Filtering
                </h2>
                <p className="text-black mt-[50px]">
                  Multi-step filtering to bring only like-minded people
                  together! That’s our key to have fuss-free trips!
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg border border-gray-300 ml-4">
              <div style={{ width: "300px", height: "100%" }}>
                <Image
                  src="/assets/sauceBg4.png"
                  alt="Background Image"
                  width={300}
                  height={300}
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="absolute top-0 left-0 right-0 p-4 mt-4 ">
                <h2 className="text-2xl font-bold text-darkvl">
                  One Stop Hassle Free Experience
                </h2>
                <p className="text-black mt-[25px]">
                  Comfortable stays, trained drivers, hospitable staff and
                  friendly trip leaders put together that one memorable trip for
                  you!
                </p>
              </div>
            </div>

            {/* add */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secreats;
