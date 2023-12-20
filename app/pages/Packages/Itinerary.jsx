import React from "react";
import Accordian from "@components/Accordian";
const Itinerary = () => {
  return (
    <div>
      <h1 className=" font-bold mt-5 mb-5 text-2xl">Itinerary</h1>
      <Accordian
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
      <Accordian />
      <div className=" text-center w-[700px]">
        <button className=" bg-zinc-800 rounded-lg p-3 mt-3 text-white font-semibold w-72 uppercase hover:scale-105 transform transition-transform duration-300">
          Download This Itinerary
        </button>
      </div>
      <div className=" w-[700px] font-semibold mt-5">
        NOTE: Travellers are suggested to book trains/flights reaching Srinagar
        between 11 AM to 3 PM on the trip start date. Similarly, on trip end
        date, book returning flight/trains leaving post 4 PM.
        <br /> <br />
        NOTE: Numerous factors such as weather, road conditions, the physical
        ability of participants etc. May cause itinerary change. We reserve the
        rights to change any schedule in the interest of safety, comfort and
        general wellbeing. <br /> <br />
        NOTE: The age limit of our group departures is 16 to 42 years due to the
        power packed itineraries that we provide to our travellers. We can
        customise trips for travellers beyond the mentioned age bracket.
        <br /> <br />
        NOTE: Extra mattress will be provided for triple sharing occupancy.
        <br /> <br />
        NOTE: You will be travelling to High Altitude cold desert places of
        India. It's advisable to consult your personal doctors for any sort of
        medical awareness before travelling. There are very few medical
        facilities/hospitals available at such remote locations and WanderOn
        shall not be responsible for any such of Medical emergency thus
        occurred. However any kind of support with respect to arranging
        logistics will be arranged if required and the expenses shall be borne
        by the clients. Please consult your personal doctor and we advise you to
        be physically fit and healthy before travelling. Do mention any sort of
        prior health issues before travelling so that we can advise you
        correctly.
      </div>
    </div>
  );
};

export default Itinerary;
