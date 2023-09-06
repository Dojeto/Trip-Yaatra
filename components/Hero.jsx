import React from "react";
import Booking from "./Booking";
const Hero = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url("/assets/bg3.jpg")`,
      }}
    >
      <div className="container mx-auto pt-40 text-center ">
        <h1 className="tracking-wider text-5xl font-extrabold text-white">
          Explore the huge world
        </h1>
        <p className=" tracking-wide text-5xl font-extrabold text-white">
          out there and enjoy it's beauty
        </p>
      </div>
      <Booking />
    </div>
  );
};

export default Hero;
