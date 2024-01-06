import React from "react";
import { BsFillClockFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
const DestinationCard = (props) => {
  const { imageUrl, title, time, shopFor, content, location } = props;
  return (
    <div className="relative  flex flex-col justify-between items-start border border-gray-200 bg-white rounded-md  m-[2%]  shadow-xl ">
      {/* <div className="relative h-full flex flex-col justify-between items-stretch"> */}
      {/* <div className="flex flex-col justify-between items-start"> */}
      <img
        className=" rounded-t-md aspect-video object-cover"
        src={imageUrl ? imageUrl : "/assets/loading.gif"}
        alt="image"
      />
      {time && (
        <div className="py-1 px-3 mt-2 ml-2 bg-[#01afd10f] flex justify-center items-center gap-1 rounded-full border border-darkbl text-darkbl text-sm">
          <span className="text-darkvl">
            <BsFillClockFill />
          </span>
          {time}
        </div>
      )}
      {title && (
        <div className="text-xl font-medium p-3  text-darkbl">{title}</div>
      )}
      {shopFor && (
        <div className="px-2 text-gray-500  h-12 font-medium">
          Shop For:{" "}
          <span className="text-gray-700 font-semibold">{shopFor}</span>
        </div>
      )}
      {content && (
        <div className="px-3 text-gray-500 font-normal  leading-6">
          {content}
        </div>
      )}
      {location && (
        <div className="flex justify-end items-center gap-1 w-full p-3">
          <span className="text-darkvl">
            <MdLocationOn size={25} />
          </span>{" "}
          {location}
        </div>
      )}
    </div>
    // </div>
    // </div>
  );
};

export default DestinationCard;
