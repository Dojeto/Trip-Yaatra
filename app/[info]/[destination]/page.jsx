// "use client";
// import useSWR from "swr";
import Hero from "@app/pages/Tours/Hero";
import ReadMoreContent from "@app/pages/Tours/ReadMoreContent";
import AboutDestination from "@app/pages/Destinations/AboutDestination";
import BestSeller from "@app/pages/Destinations/BestSeller";
import Todo from "@app/pages/Destinations/Todo";
import Places from "@app/pages/Destinations/Places";
import Shop from "@app/pages/Destinations/Shop";
import Review from "@components/Review";
import Form from "@components/Form";
import Looking from "@app/pages/Home/Connect";

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
        <div className="flex flex-col gap-y-9">
          <Hero
            imageUrl={data.packages[destination].imagePath}
            title={data.packages[destination].title}
            name={data.packages[destination].name}
            about = {data.packages[destination].about}
          />
          {/* <ReadMoreContent /> */}
          <AboutDestination destination={destination} data={data.packages[destination]} />
          <BestSeller data={data.packages[destination]} />
          <Todo data={data.packages[destination]} />
          <Places data={data.packages[destination]} />
          <Shop data={data.packages[destination]} />
          <Review />
          <Looking />
          <Form />
        </div>
      ) : (
        <div>Ye Route Nahi hai</div>
      )}
    </>
  );
};

export default page;
