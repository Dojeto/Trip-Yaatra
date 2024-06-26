import { BsFillClockFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import Link from "next/link";
const PackageCard = (props) => {
  const { price, title, days, date, destination, imageUrl, link } = props;
  return (
    <div className="relative w-full tblt:w-auto tblt:min-w-72  flex flex-col justify-between items-stretch border border-gray-200 bg-white rounded-xl p-3 m-[2%]  shadow-xl ">
      <div className="h-full flex flex-col justify-between items-start">
        <div className="absolute z-10 bg-yellow-300 p-1 top-[-5px] right-[-5px] rounded-md shadow-xl lg:text-sm">
          {price ? (
            <>
              <span className=" font-bold ">₹{price}/- </span>Onwards
            </>
          ) : (
            <span className="font-medium">Customized</span>
          )}
        </div>
        <div className="flex flex-col justify-start items-start">
          <img
            className=" rounded-lg aspect-video object-cover"
            src={imageUrl}
            alt={title}
          />
          <div className="text-xl font-medium p-2 h-20 xl:text-lg lg:text-base">
            {title}
          </div>
          <div className="flex justify-between px-2 w-full">
            <div className="flex flex-col justify-start items-start">
              <div className="flex justify-center items-center gap-1 text-base lg:text-sm">
                <BsFillClockFill />
                {days}
              </div>
              <div className="flex justify-center items-center gap-1 lg:text-sm">
                <LuCalendarDays />
                {date}
              </div>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="flex justify-center items-center gap-1">
                <MdLocationOn />
                {destination}
              </div>
            </div>
          </div>
        </div>
        <Link href={link} shallow>
          <button className="bg-darkvl mt-3 w-full p-3 text-white rounded-md">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
