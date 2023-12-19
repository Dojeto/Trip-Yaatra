"use client";
import { useState } from "react";
import React from "react";
import PackageCard from "@components/PackageCard";

const Packages = (props) => {
  const { data, info } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const tourData = {
    "india-trips": "india",
    "international-trips": "international",
    "weekend-trips": "weekend",
    "group-tours": "group",
  };
  const handleClick = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className=" mx-[9%] flex flex-col justify-center items-center">
      <div>
        <h2 className=" m-3 font-bold text-center text-darkbl text-5xl">
          All Packages
        </h2>
      </div>
      <div className=" bg-highlight w-[120px] h-[3px] mt-2 mb-11"></div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-5 lg:grid-cols-2 md:grid-cols-1">
        {Object.entries(data)
          .filter((entry, i) => {
            let trip = entry[1];
            return trip["tour"] === tourData[info];
          })
          .slice(0, currentPage * 3)
          .map((entry, i) => {
            let trip = entry[1];
            return (
              <PackageCard
                key={i}
                imageUrl={trip["imageUrl"]}
                price={trip["price"]}
                title={trip["title"]}
                date={trip["date"]}
                days={trip["duration"]}
                destination={trip["destination"]}
                link={trip["link"]}
              />
            );
          })}
      </div>
      {Object.entries(data).length > currentPage * 1 && (
        <button
          className="border-4 p-2 pr-7 pl-7 text-lg border-darkbl rounded-lg"
          onClick={handleClick}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Packages;
