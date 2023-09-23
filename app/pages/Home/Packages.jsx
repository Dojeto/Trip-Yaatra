import Link from "next/link";

import PackageCard from "@components/PackageCard";
const Packages = () => {
  return (
    <div className="mt-[50px] px-36 flex flex-col gap-8">
      <div className="flex items-end justify-between flex-row text-center">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-2xl font-bold  text-darkvl">
            Elevate Your Experience with Our Package
          </span>
          <span className="text-l text-gray-600">Trending this Month</span>
        </div>
        <Link href="#" className="text-l text-gray-600 pointer-link">
          View All
        </Link>
      </div>
      <PackageCard />
    </div>
  );
};

export default Packages;
