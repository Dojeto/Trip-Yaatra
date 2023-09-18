import React from "react";
import PackageCard from "@components/PackageCard";

const TripsPackages = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
        <h2 className=" m-3 font-bold text-center text-darkvl text-5xl">Best Seller Packages</h2>
        <h2 className=" m-3 font-bold text-xl">Find your perfect travel experience with our top-rated packages</h2>
      </div>
      <div className=" bg-darkvl w-[120px] h-[3px] mt-2 mb-11"></div>
      <div className="grid grid-cols-4 gap-4">
        <PackageCard price="70000" title="sandwich massage🤤" date="24 sep" days="2/3" destination="Thailand" />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </div>
  );
};

export default TripsPackages;
