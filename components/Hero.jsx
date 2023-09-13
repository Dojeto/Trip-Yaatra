import React from "react";
import Search from "./Search";
const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url("/assets/bg3.jpg")`,
      }}
    >
      <div className="container mx-auto pt-40 text-center z-10">
        <h1 className="tracking-wider text-5xl font-extrabold text-white">
          Explore the huge world
        </h1>
        <p className="tracking-wide text-5xl font-extrabold text-white">
          out there and enjoy its beauty
        </p>
      </div>
      <div className="w-8 absolute bottom-10 left-1/2">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce fill-current text-white "
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
            fill="currentColor"
          ></path>
        </svg>

        <span className="main__scroll-text text-white ">Scroll</span>
      </div>
      <Search />
    </div>
  );
};

export default Hero;
