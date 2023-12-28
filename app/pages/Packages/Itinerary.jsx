import React from "react";
import Accordian from "@components/Accordian";
const Itinerary = (props) => {
  const { notes } = props;
  console.log(notes);
  return (
    <div>
      <h1 className=" font-bold mt-5 mb-5 text-2xl">Itinerary</h1>
      {/* <Accordian
        title="Arrival At Srinagar - Overnight Stay At Srinagar"
        day="1"
        description="Arrive at Srinagar Airport and reach the houseboat.
Upon reaching the houseboat, you’ll be greeted by our team captain.
Check in to the houseboat, freshen up, and relax. You can go for Shikara Ride.
You can explore the Srinagar market for some shopping.
Dinner followed by a briefing for the next day & overnight sleep."
      />
      <Accordian
        title="
Srinagar To Kargil Via Sonamarg, Drass & Zojila Pass. [Distance: 200km, Duration: 8-9 Hours] - Overnight Stay At Kargil."
        day="2"
        description="Wake up early morning and post breakfast depart for Kargil [2700m].
        Enroute cross Sonamarg.
        Then head towards Drass, the coldest inhabited place in India & often called Gateway to Ladakh, via the Zoji La Pass [3528m].
        After the lunch break, continue your journey to Kargil.
        Arrive at Kargil & check in to the hotel."
      />
      <Accordian /> */}
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
