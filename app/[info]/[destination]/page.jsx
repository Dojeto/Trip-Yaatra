"use client";
import Hero from "@app/pages/Tours/Hero";
import ReadMoreContent from "@app/pages/Tours/ReadMoreContent";
import BestSeller from "@app/pages/Destinations/BestSeller";
import useSWR from "swr";
import Todo from "@app/pages/Destinations/Todo";
import Places from "@app/pages/Destinations/Places";
import Shop from "@app/pages/Destinations/Shop";
const fetcher = (url) => fetch(url).then((res) => res.json());

const page = ({ params }) => {
  const { data, error, isLoading } = useSWR(`/api/${params.info}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data.packages[params.destination]);
  return (
    <>
      {data.packages?.[params.destination] !== undefined ? (
        // <div className="mt-24">{data.packages[params.destination].title}</div>
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
