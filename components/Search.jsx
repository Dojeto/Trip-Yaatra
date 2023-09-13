import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center item-center py-32">
      <div className=" flex justify-center item-center w-3/4 h-14 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <select name="places" id="">
          <option value="Mumbai">Mumbai</option>
          <option value="Dubai">Dubai</option>
          <option value="Delhi">Delhi</option>
          <option value="Shimla">Shimla</option>
          <option value="Ladakh">Ladakh</option>
        </select>
      </div>
    </div>
  );
};

export default Search;

{
  /* <div className="flex flex-col text-white">
    <div className="flex flex-row">
      <div className="w-fit m-3 px-4 py-2 border rounded-md bg-white text-black transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer">
        Flights
      </div>
      <div className="w-fit m-3 px-4 py-2 border rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer">
        Hotels
      </div>
    </div>
    <div className="flex flex-row">
      <div className="bg-white text-black m-3 p-3 flex flex-col font-semibold gap-1 rounded-md w-full">
        <div className="text-sm  text-gray-500 ">From</div>
        <div className="text-md text-darkvl font-bold">Mumbai, India</div>
        <div className="text-sm text-gray-500 ">
          BOM - Chhatrapati Shivaji Inter..
        </div>
      </div>
      <div className="bg-white text-black m-3 p-3 flex flex-col font-semibold gap-1 rounded-md w-full">
        <div className="text-sm text-gray-500 ">To</div>
        <div className="text-md text-darkvl font-bold">
          Dubai, United Arab Emirates
        </div>
        <div className="text-sm text-gray-500 ">
          DXB - Dubai International Airport
        </div>
      </div>
      <div className="bg-white text-black m-3 p-3 flex flex-col font-semibold gap-1 rounded-md w-full">
        <div className="text-sm text-gray-500 ">Journey Date</div>
        <div className="text-md text-darkvl font-bold">22/05/2023</div>
        <div className="text-sm text-gray-500 ">Thursday</div>
      </div>
      <div className="bg-white text-black m-3 p-3 flex flex-col font-semibold gap-1 rounded-md w-full">
        <div className="text-sm text-gray-500 ">Passenger Class</div>
        <div className="text-md text-darkvl font-bold">02 Passengers</div>
        <div className="text-sm text-gray-500 ">Business</div>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <div className=" bg-darkvl w-fit  rounded-md m-3 px-4 py-2 hover:bg-blue-900 hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out">
        Search
      </div>
    </div>
  </div> */
}
