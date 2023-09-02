import React from "react";

const Booking = () => {
  return (
    <div className="flex justify-center item-center pt-32">
      <div className="w-3/4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <div className="flex flex-col text-white">
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
              <div className="text-md text-blue-600 font-bold">
                Mumbai, India
              </div>
              <div className="text-sm text-gray-500 ">
                BOM - Chhatrapati Shivaji Inter..
              </div>
            </div>
            <div className="bg-white text-black m-3 p-3 flex flex-col font-semibold gap-1 rounded-md w-full">
              <div className="text-sm text-gray-500 ">To</div>
              <div className="text-md text-blue-600 font-bold">
                Dubai, United Arab Emirates
              </div>
              <div className="text-sm text-gray-500 ">
                DXB - Dubai International Airport
              </div>
            </div>
            <div className="bg-white text-black m-3 p-3 flex flex-col font-semibold gap-1 rounded-md w-full">
              <div className="text-sm text-gray-500 ">Journey Date</div>
              <div className="text-md text-blue-600 font-bold">22/05/2023</div>
              <div className="text-sm text-gray-500 ">Thursday</div>
            </div>
            <div className="bg-white text-black m-3 p-3 flex flex-col font-semibold gap-1 rounded-md w-full">
              <div className="text-sm text-gray-500 ">Passenger Class</div>
              <div className="text-md text-blue-600 font-bold">
                02 Passengers
              </div>
              <div className="text-sm text-gray-500 ">Business</div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className=" bg-blue-600 w-fit  rounded-md m-3 px-4 py-2 hover:bg-blue-900 hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out">
              Search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
