"use client";
import React, { useState } from "react";

const AboutDestination = (props) => {
  const { data } = props;
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  const toggleContent = () => {
    setIsContentExpanded(!isContentExpanded);
  };
  return (
    <div className="flex justify-center items-center">
      <div className=" px-2 w-[1230px] m-5 shadow-lg rounded-md xs:m-4">
        <h2 className=" border-highlight border-l-4 ml-3 pl-3 m-2 font-bold text-darkbl text-3xl xs:text-xl">
          About India Tours
        </h2>
        <div
          className={` ${
            isContentExpanded ? "" : "max-h-[90px] overflow-hidden"
          } `}
        >
          <p className=" m-4 xs:text-sm whitespace-pre-line">{data?.about}</p>
        </div>
        <div className=" m-4 flex justify-end">
          <button
            onClick={toggleContent}
            className=" border-2 rounded-md p-1 w-28 border-darkbl hover:bg-darkbl hover:text-white"
          >
            {isContentExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutDestination;
