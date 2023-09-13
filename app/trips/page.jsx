"use client"
import style from "../style/trips.module.css";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Trips = () => {
  const { data, error , isLoading } = useSWR("/api/staticdata", fetcher);
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div className={style.main}>{data.test}</div>;
};

export default Trips;