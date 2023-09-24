"use client"
import Hero from "@app/pages/Packages/Hero";
import Details from "@app/pages/Packages/Details";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const page = ({ params }) => {
  const { data, error, isLoading } = useSWR(`/api/trips`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(params.package);
  return (
    <>
      <Hero
        imageUrl={data[params.package].imageUrl}
        title={data[params.package].title}
        tag={data[params.package].tagline}
        content=""
        name={data.name}
      />
      <Details />
    </>
  );
};

export default page;
