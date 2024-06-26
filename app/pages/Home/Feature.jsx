import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
const Feature = () => {
  return (
    <div className="pt-8 mx-36 flex flex-col justify-center  gap-8 transition-all duration-300 ease-linear xl:mx-20 lg:mx-12 md:mx-8 lg:gap-8 md:gap-4">
      <div className="flex items-end justify-between text-center">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-2xl font-bold  text-darkbl text-left">
            Visit Top Destination with us
          </span>
          <span className="text-l text-gray-600">Trending this Month</span>
        </div>
        {/* <div className="text-l text-gray-600">View All</div> */}
      </div>
      {/* Desktop view */}
      <div className="flex gap-12 lg:gap-8 md:gap-4 xs:hidden">
        <div className=" w-full flex flex-col gap-8 lg:gap-8 md:gap-4">
          <Link
            href="/international-trips/bali"
            className=" h-[430px] first-letter relative"
          >
            <img
              src="https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
              className="absolute rounded-xl inset-0 w-full h-full object-cover brightness-[.7]"
              alt=""
            />
            <div className="m-8 p-4 sm:m-5 sm:p-3  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl sm:text-base bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Bali
            </div>
          </Link>
          <Link href="/international-trips/dubai" className="h-64 relative">
            <img
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              className="absolute rounded-xl inset-0 w-full h-full object-cover brightness-[.7] "
              alt=""
            />
            <div className="m-8 p-4 sm:m-5 sm:p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl sm:text-base bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Dubai, UAE
            </div>
          </Link>
        </div>
        <div className=" w-full flex flex-col gap-8 lg:gap-8 md:gap-4">
          <Link href="/india-trips/ladakh" className="h-64 relative">
            <img
              src="https://images.unsplash.com/photo-1536295243470-d7cba4efab7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2038&q=80"
              className="absolute rounded-xl inset-0 w-full h-full object-cover brightness-[.7] "
              alt=""
            />
            <div className="m-8 p-4 sm:m-5 sm:p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl sm:text-base bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Leh Ladakh
            </div>
          </Link>
          <Link
            href="/international-trips/bhutan"
            className=" h-[430px] first-letter relative"
          >
            <img
              src="https://images.unsplash.com/photo-1608659377921-e985721b3d04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="absolute rounded-xl inset-0 w-full h-full object-cover brightness-[.7]"
              alt=""
            />
            <div className="m-8 p-4 sm:m-5 sm:p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl sm:text-base bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Bhutan
            </div>
          </Link>
        </div>
      </div>
      {/* Mobile view */}
      <div className="hidden flex-col gap-4 xs:flex">
        <div className="h-36 w-full first-letter relative">
          <img
            src="https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
            className="rounded-xl w-full h-full inset-0 object-cover brightness-[.7]"
            alt=""
          />
          <div className="m-8 p-4 sm:m-5 sm:p-3  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl sm:text-base bottom-0 text-white border border-gray-100">
            <div className="inline pr-3">
              <HiLocationMarker className="inline" />
            </div>
            Bali
          </div>
        </div>
        <div className="h-36 w-full first-letter relative">
          <img
            src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            className="rounded-xl w-full h-full inset-0 object-cover brightness-[.7]"
            alt=""
          />
          <div className="m-8 p-4 sm:m-5 sm:p-3  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl sm:text-base bottom-0 text-white border border-gray-100">
            <div className="inline pr-3">
              <HiLocationMarker className="inline" />
            </div>
            Dubai
          </div>
        </div>
        <div className="h-36 w-full first-letter relative">
          <img
            src="https://images.unsplash.com/photo-1536295243470-d7cba4efab7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2038&q=80"
            className="rounded-xl w-full h-full inset-0 object-cover brightness-[.7]"
            alt=""
          />
          <div className="m-8 p-4 sm:m-5 sm:p-3  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl sm:text-base bottom-0 text-white border border-gray-100">
            <div className="inline pr-3">
              <HiLocationMarker className="inline" />
            </div>
            Leh Ladakh
          </div>
        </div>
        <div className="h-36 w-full first-letter relative">
          <img
            src="https://images.unsplash.com/photo-1608659377921-e985721b3d04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            className="rounded-xl w-full h-full inset-0 object-cover brightness-[.7]"
            alt=""
          />
          <div className="m-8 p-4 sm:m-5 sm:p-3  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl sm:text-base bottom-0 text-white border border-gray-100">
            <div className="inline pr-3">
              <HiLocationMarker className="inline" />
            </div>
            Bhutan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
