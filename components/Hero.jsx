import React from "react";
import Booking from "./Booking";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url("/assets/bg3.jpg")`,
      }}
    >
      <div className="container mx-auto pt-40 text-center relative z-10">
        <h1 className="tracking-wider text-5xl font-extrabold text-white">
          Explore the huge world
        </h1>
        <p className="tracking-wide text-5xl font-extrabold text-white">
          out there and enjoy its beauty
        </p>
      </div>

      <div className="absolute top-0 right-0 h-full flex flex-col items-end justify-center space-y-6 p-4 mr-[25px]">
        {/* section */}
        <div className="text-center p-2 rounded-full  ">
          <Link href="#">
            <svg
              className="h-8 w-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </Link>
        </div>
        <div class="text-center p-2 rounded-full  ">
          <Link href="#" className="block">
            <svg
              className="h-8 w-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </Link>
        </div>
        <div className="text-center p-2 rounded-full ">
          <Link href="#" className="block">
            <svg
              className="h-7 w-7 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </Link>
        </div>
        <div className="text-center p-2 rounded-full ">
          <Link href="#" className="block">
            <svg
              className="h-7 w-7 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>

        {/* section */}
      </div>
      <Booking />
    </div>
  );
};

export default Hero;
