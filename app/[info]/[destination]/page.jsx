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
  const { info, destination } = params;
  const tourData = {
    "india-trips": indiaTrips,
    "international-trips": internationalTrips,
  };
  const data = tourData[info];
  return (
    <>
      {data?.packages?.[destination] !== undefined ? (
        <>
          <Hero
            imageUrl={data.packages[destination].imagePath}
            title={data.packages[destination].title}
            content=""
            name={data.packages[destination].name}
          />
          <ReadMoreContent />
          <BestSeller data={data.packages[destination]} />
          <Todo data={data.packages[destination]} />
          <Places data={data.packages[destination]} />
          <Shop data={data.packages[destination]} />
        </>
      ) : (
        <div>Ye Route Nahi hai</div>
      )}
    </>
  );
};

export default page;
