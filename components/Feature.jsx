import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
const Feature = () => {
  return (
    <div className="container m-0 pt-8 h-full px-36 flex flex-col gap-8">
      <div className="flex items-end justify-between flex-row text-center">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-2xl font-bold  text-darkvl">
            Visit Top Destination with us
          </span>
          <span className="text-l text-gray-600">Trending this Month</span>
        </div>
        <div className="text-l text-gray-600">View All</div>
      </div>
      <div className=" flex flex-row gap-8">
        <div className=" w-full flex flex-col gap-8">
          <div className=" h-[590px] first-letter relative">
            <img
              src="/assets/bg3.jpg"
              className="absolute rounded-xl inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="m-8 p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Dubai, UAE
            </div>
          </div>
          <div className="h-72 relative">
            <img
              src="/assets/bg3.jpg"
              className="absolute rounded-xl inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="m-8 p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Dubai, UAE
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col gap-8">
          <div className="h-72 relative">
            <img
              src="/assets/bg3.jpg"
              className="absolute rounded-xl inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="m-8 p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Dubai, UAE
            </div>
          </div>
          <div className=" h-[590px] first-letter relative">
            <img
              src="/assets/bg3.jpg"
              className="absolute rounded-xl inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="m-8 p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Dubai, UAE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

// <div className="flex flex-wrap justify-center gap-4">
//   {/* Repeat this card section for each card */}
//   <div className="w-[300px]">
//     <div className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:-translate-y-1 hover:scale-105">
//       <Link href="#" className="block rounded-t-lg">
//         <Image
//           src="/assets/bg3.jpg"
//           alt="Article Image"
//           width={300}
//           height={300}
//         />
//       </Link>
//       <div className="p-3 flex flex-col items-center justify-center">
//         <Link
//           href="#"
//           className="block mb-2 text-lg font-bold text-gray-900 dark:text-white dark:hover:text-blue-300 transition-colors text-center"
//         >
//           BALI
//         </Link>
//       </div>
//     </div>
//   </div>

//   {/* Repeat this card section for each card */}
// </div>
