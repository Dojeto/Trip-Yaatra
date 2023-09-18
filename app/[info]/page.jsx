"use client";
import useSWR from "swr";
import PackageHero from "@components/Tours/Hero";
import ReadMoreContent from "@components/Tours/ReadMoreContent";
import Packages from "@components/Tours/Packages";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Trips = ({ params }) => {
  const { data, error, isLoading } = useSWR(`/api/${params.info}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <PackageHero
        imageUrl={data.imagePath}
        title={data.title}
        content=""
        name={data.name}
      />
      <ReadMoreContent />
      <Packages/>
    </>
  );
};

export default Trips;
