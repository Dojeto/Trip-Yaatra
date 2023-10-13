import React from "react";
import PackageCard from "@components/PackageCard";

const TripsPackages = (props) => {
  const { data } = props;
  return (
    <div className=" mx-[9%] flex flex-col justify-center items-center">
      <div>
        <h2 className=" m-3 font-bold text-center text-darkbl text-5xl">
          Best Seller Packages
        </h2>
        <h2 className=" m-3 font-bold text-xl">
          Find your perfect travel experience with our top-rated packages
        </h2>
      </div>
      <div className=" bg-highlight w-[120px] h-[3px] mt-2 mb-11"></div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-5 lg:grid-cols-2 md:grid-cols-1">
        {/* <div className="flex flex-wrap justify-center items-start"> */}
        {data?.bestSeller.map((val, i) => (
          <PackageCard
            key={i}
            imageUrl={val.imageUrl}
            price={val.price}
            title={val.title}
            date={val.date}
            days={val.days}
            destination={val.destination}
            link={val.link}
          />
        ))}
      </div>
    </div>
  );
};

export default TripsPackages;
