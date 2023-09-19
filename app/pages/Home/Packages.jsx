import Link from "next/link";

import PackageCard from "@components/PackageCard";
const Packages = () => {
  return (
    <div className="container mt-[50px]  h-full px-36 flex flex-col gap-8">
      <div className="flex items-end justify-between flex-row text-center">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-2xl font-bold  text-darkvl">
            Elevate Your Experience with Our Package
          </span>
          <span className="text-l text-gray-600">Trending this Month</span>
        </div>
        <Link href="#" className="text-l text-gray-600 pointer-link">
          View All
        </Link>
      </div>
      <PackageCard />
      {/* <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="max-w-sm bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105">
            <Link href="#">
              <img
                className="rounded-t-lg"
                src="/assets/bali-test.jpg"
                alt="Bali"
              />
            </Link>
            <div className="px-5 pb-5">
              <Link href="#">
                <h5 className="text-[25px] font-bold tracking-tight text-[#3b3b6e]">
                  Bali
                </h5>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-[20px] font-semibold text-gray-900">
                  $599 -{" "}
                  <span className="text-[20px] font-normal">
                    Starting price
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="max-w-sm bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105">
            <Link href="#">
              <img
                className="rounded-t-lg"
                src="/assets/bali-test.jpg"
                alt="Bali"
              />
            </Link>
            <div className="px-5 pb-5">
              <Link href="#">
                <h5 className="text-[25px] font-bold tracking-tight text-[#3b3b6e]">
                  Bali
                </h5>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-[20px] font-semibold text-gray-900">
                  $599 -{" "}
                  <span className="text-[20px] font-normal">
                    Starting price
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="max-w-sm bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105">
            <Link href="#">
              <img
                className="rounded-t-lg"
                src="/assets/bali-test.jpg"
                alt="Bali"
              />
            </Link>
            <div className="px-5 pb-5">
              <Link href="#">
                <h5 className="text-[25px] font-bold tracking-tight text-[#3b3b6e]">
                  Bali
                </h5>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-[20px] font-semibold text-gray-900">
                  $599 -{" "}
                  <span className="text-[20px] font-normal">
                    Starting price
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <div className="max-w-sm bg-white rounded-lg shadow-xl hover:shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105">
            <Link href="#">
              <img
                className="rounded-t-lg"
                src="/assets/bali-test.jpg"
                alt="Bali"
              />
            </Link>
            <div className="px-5 pb-5">
              <Link href="#">
                <h5 className="text-[25px] font-bold tracking-tight text-[#3b3b6e]">
                  Bali
                </h5>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-[20px] font-semibold text-gray-900">
                  $599 -{" "}
                  <span className="text-[20px] font-normal">
                    Starting price
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div> */}
    </div>
  );
};

export default Packages;
