"use client";
import useSWR from "swr";
import Image from "next/image";
import TripsCard from "@components/TripsCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Trips = ({ params }) => {
  const { data, error, isLoading } = useSWR(`/api/${params.info}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className=" h-screen">
      <div
        className="relative bg-cover bg-center w-screen h-full overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(80, 80, 80, 0.1) 67.4%, rgb(0, 0, 0) 90.97%),url("assets/india-trips.png")`,
        }}
      >
        {/* <div className=" h-5/6 w-11/12 absolute top-7 -right-2 border-8 border-slate-100">
          <div className=" bg-slate-100 w-1/2 h-20 flex justify-center items-center absolute top-20 font-homecontent">
            <h1 className=" ">Captivating India Chronicles</h1>
          </div>
          <div className=" bg-slate-100 w-1/2 h-20 flex justify-center items-center absolute top-60 font-homecontent">
            <h1 className=" ">Explore India's Kaleidoscope of Diversity</h1>
          </div>
        </div> */}
        
        {/* <div className="  absolute right-1 bottom-[40px] flex text-white">
          <TripsCard
            title="Manali"
            imageUrl="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
          />

        </div> */}
      </div>
    </div>
  );
};

export default Trips;
