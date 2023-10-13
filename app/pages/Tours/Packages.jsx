"use client";
import { useState } from "react";
import React from "react";
import PackageCard from "@components/PackageCard";

const Packages = (props) => {
  const { data } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className=" flex flex-col justify-center items-center mt-24">
      <div>
        <h2 className=" m-3 font-bold text-center text-darkbl text-5xl">
          All Packages
        </h2>
      </div>
      <div className=" bg-highlight w-[120px] h-[3px] mt-2 mb-11"></div>
      <div className="grid grid-cols-3 gap-x-8">
        {Object.entries(data)
          .slice(0, currentPage * 1)
          .map((entry, i) => {
            let trip = entry[1];
            return trip["tour"] == "india" ? (
              <>
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
              </>
            ) : (
              <></>
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
