import React from "react";

const Date = () => {
  return (
    <div>
      <h1 className=" font-bold mt-5 mb-5 text-2xl">What's Included</h1>
      <div>
        <h2 className="font-bold mt-5 mb-5 text-2xl">Inclusions:</h2>
        {/* Generalised for all trips don't change*/}
        <ul className="pl-7">
          <li>
            ✔ Transportation as per the itinerary, typically in a private
            vehicle unless otherwise specified.
          </li>
          <li>✔ Accommodation for specified nights based on double sharing.</li>
          <li>
            ✔ Daily meals or specified meal plans (like breakfast) as outlined
            in the itinerary.
          </li>
          <li>
            ✔ Specific activities or experiences mentioned in the package.
          </li>
          <li>✔ Airport/station drop-off or pick-up as specified.</li>
          <li>
            ✔ Specific activities or experiences mentioned in the package.
          </li>
          <li>
            ✔ Guidance and support from a tour guide or team leader during the
            trip.
          </li>
          <li>✔ Provision of essential medical aid and a first aid kit.</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold mt-5 mb-5 text-2xl">Exclusions:</h2>
        <ul className="pl-7">
          <li>
            ✘ Airline tickets, including taxes and fees for arrival and
            departure.
          </li>
          <li>
            ✘ Airport or railway station pick-ups unless explicitly stated.
          </li>
          <li>
            ✘ Additional government taxes or charges beyond the package price.
          </li>
          <li>
            ✘ Extra expenses such as entry tickets to attractions, camera fees,
            or optional activities not specified in the itinerary.
          </li>
          <li>
            ✘ Water sports or activities not explicitly mentioned in the
            package.
          </li>
          <li>
            ✘ Any food or beverage not included in the package, such as
            alcoholic drinks, mineral water, or meals/refreshments during
            travel.
          </li>
          <li>
            ✘ Costs resulting from unforeseen events like natural disasters,
            roadblocks, or similar situations.
          </li>
          <li>
            ✘ Anything not explicitly mentioned in the inclusions section of the
            package.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Date;
