// "use client";
// import useSWR from "swr";
import Hero from "@app/pages/Tours/Hero";
import ReadMoreContent from "@app/pages/Tours/ReadMoreContent";
import BestSeller from "@app/pages/Destinations/BestSeller";
import Todo from "@app/pages/Destinations/Todo";
import Places from "@app/pages/Destinations/Places";
import Shop from "@app/pages/Destinations/Shop";

import indiaTrips from "@json/india-trips";
import internationalTrips from "@json/international-trips.json";

const page = ({ params }) => {
  const tourData = {
    "india-trips": indiaTrips,
    "international-trips": internationalTrips,
  };
  const data = tourData[params.info]
  return (
    <>
      {data?.packages?.[params.destination] !== undefined ? (
        <>
          <Hero
            imageUrl={data.packages[params.destination].imagePath}
            title={data.packages[params.destination].title}
            content=""
            name={data.packages[params.destination].name}
          />
          <ReadMoreContent />
          <BestSeller data={data.packages[params.destination]} />
          <Todo data={data.packages[params.destination]} />
          <Places data={data.packages[params.destination]} />
          <Shop data={data.packages[params.destination]} />
        </>
      ) : (
        <div>Ye Route Nahi hai</div>
      )}
    </>
  );
};

export default page;
