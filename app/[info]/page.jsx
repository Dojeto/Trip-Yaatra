// "use client";
// import useSWR from "swr";
import PackageHero from "@app/pages/Tours/Hero";
import ReadMoreContent from "@app/pages/Tours/ReadMoreContent";
import BestSeller from "@app/pages/Tours/BestSeller";
import Secrets from "@components/Secret";
import Packages from "@app/pages/Tours/Packages";
import Review from "@components/Review";
import FAQ from "@components/FAQ";
import Form from "@components/Form";


import indiaTrips from "@json/india-trips";
import internationalTrips from "@json/international-trips";
import weekendTrips from "@json/weekend-trips";
import groupTrips from "@json/group-tours";

import tripsData from "@json/trips.json"
// const fetcher = (url) => fetch(url).then((res) => res.json());

const Trips = ({ params }) => {
  const tourData = {
    "india-trips": indiaTrips,
    "international-trips": internationalTrips,
    "weekend-trips":weekendTrips,
    "group-tours":groupTrips
  };
  const data = tourData[params.info]
  return (
    <>
      <PackageHero
        imageUrl={data?.imagePath}
        title={data?.title}
        content=""
        name={data?.name}
      />
      <ReadMoreContent />
      <BestSeller data={data} />
      <Packages data={tripsData} />
      <Secrets />
      <Review />
      <FAQ />
      <Form />
    </>
  );
};

export default Trips;