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
      <Search />
    </div>
  );
};

export default Hero;
