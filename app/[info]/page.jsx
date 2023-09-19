"use client";
import useSWR from "swr";
import PackageHero from "@app/pages/Tours/Hero";
import ReadMoreContent from "@app/pages/Tours/ReadMoreContent";
import Packages from "@app/pages/Tours/Packages";

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
      <Packages data={data} />
    </>
  );
};

export default Trips;
