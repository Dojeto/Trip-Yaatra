import Link from "next/link";
import { BsFillClockFill } from "react-icons/bs";
// import { FaLocationDot } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
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
      <div className="relative w-max flex flex-col justify-center items-center border border-gray-200 bg-white rounded-xl p-3 m-[2%]  shadow-xl ">
        <div className="relative max-w-[370px] flex flex-col justify-center items-center">
          <div className="absolute z-50 bg-yellow-300 p-1 top-[-5px] right-[-5px] rounded-sm shadow-xl">
            <span className=" font-bold">₹70000/- </span>Onwards
          </div>
          <img className=" rounded-lg" src="/assets/bali-test.jpg" alt="Bali" />
          <div className="text-xl font-medium p-2">
            Experience the Best of Vietnam: 8 Days Tour Package
          </div>
          <div className="flex justify-between px-2 w-full">
            <div className="flex flex-col justify-start items-start">
              <div className="flex justify-center items-center gap-1">
                <BsFillClockFill />
                7N/8D
              </div>
              <div className="flex justify-center items-center gap-1">
                <LuCalendarDays />
                24 Sep
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="flex justify-center items-center gap-1">
                <MdLocationOn />
                Mumbai
              </div>
            </div>
          </div>
          <button className="bg-darkvl my-3 w-full p-3 text-white rounded-md">
            View Details
          </button>
        </div>
      </div>
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
