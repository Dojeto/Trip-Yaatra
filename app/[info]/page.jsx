"use client";
import useSWR from "swr";
import PackageHero from "@app/pages/Tours/Hero";
import ReadMoreContent from "@app/pages/Tours/ReadMoreContent";
import Packages from "@app/pages/Tours/BestSeller";
import Secreats from "@components/Secret";
import Review from "@components/Review";
import FAQ from "@components/FAQ";
import Form from "@components/Form";
import UpperFooter from "@components/UpperFooter";
import Hero from "@app/pages/Destination/Hero";
import Details from "@app/pages/Destination/Details";
import LowerFooter from "@components/LowerFooter";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Trips = ({ params }) => {
  const { data, error, isLoading } = useSWR(`/api/${params.info}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  return (
    <>
      {params.info == "trips" ? (
        <>
          <Hero
            imageUrl={data.imagePath}
            title={data.title}
            content=""
            name={data.name}
          />
          <Details />

          <UpperFooter />
          <LowerFooter />

        </>
      ) : (
        <>
          <PackageHero
            imageUrl={data.imagePath}
            title={data.title}
            content=""
            name={data.name}
          />
          <ReadMoreContent />
          <Packages data={data} />
          <Secreats />
          <Review />
          <FAQ />
          <Form />
          <UpperFooter />
          <LowerFooter />
        </>
      )}
    </>
  );
};

export default Trips;
