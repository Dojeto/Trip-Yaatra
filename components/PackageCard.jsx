import { BsFillClockFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

const PackageCard = (props) => {
  const {price, title , days , date , destination , imageUrl} = props
  return (
    <div className="relative w-max flex flex-col justify-center items-center border border-gray-200 bg-white rounded-xl p-3 m-[2%]  shadow-xl ">
      <div className="relative max-w-[270px] flex flex-col justify-center items-center">
        <div className="absolute z-10 bg-yellow-300 p-1 top-[-5px] right-[-5px] rounded-sm shadow-xl">
          <span className=" font-bold">{price} </span>Onwards
        </div>
        <img className=" rounded-lg" src={imageUrl} alt="Bali" />
        <div className="text-xl font-medium p-2">
          {title}
        </div>
        <div className="flex justify-between px-2 w-full">
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-center items-center gap-1">
              <BsFillClockFill />
              {days}
            </div>
            <div className="flex justify-center items-center gap-1">
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
        <button className="bg-darkvl my-3 w-full p-3 text-white rounded-md">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
