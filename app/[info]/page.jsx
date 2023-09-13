"use client"
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Trips = ({params}) => {
  const { data, error , isLoading } = useSWR(`/api/${params.info}`, fetcher);
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div className="">{data.title}</div>;
};

export default Trips;