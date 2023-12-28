import React from "react";
import Accordian from "@components/Accordian";
const Itinerary = (props) => {
  const { notes, itinerary } = props;
  console.log(itinerary);
  return (
    <div>
      <h1 className=" font-bold mt-5 mb-5 text-2xl">Itinerary</h1>
      {itinerary.map((ele, i) => {
        return (
          <Accordian title={ele.title} day={i+1} description={ele.description} />
        );
      })}
      <div className=" text-center w-[700px]">
        <button className=" bg-zinc-800 rounded-lg p-3 mt-3 text-white font-semibold w-72 uppercase hover:scale-105 transform transition-transform duration-300">
          Download This Itinerary
        </button>
      </div>
      <div className=" w-[700px] font-semibold mt-5">
        {/* Generalised for all trips don't change*/}
        {notes?.map((ele) => {
          return (
            <>
              {ele}
              <br />
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Itinerary;
