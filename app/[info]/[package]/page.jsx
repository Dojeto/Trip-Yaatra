"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const page = ({ params }) => {
  const { data, error, isLoading } = useSWR(`/api/${params.info}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      {data.packages?.[params.package] !== undefined ? (
        <div>{data.packages[params.package].title}</div>
      ) : (
        <div>Ye Route Nahi hai</div>
      )}
    </>
  );
};

export default page;
