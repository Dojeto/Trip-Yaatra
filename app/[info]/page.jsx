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
        className="relative bg-cover bg-center w-screen h-4/5"
        style={{
          backgroundImage: `linear-gradient(rgba(80, 80, 80, 0.1) 67.4%, rgb(0, 0, 0) 90.97%),url("/assets/tajMahal.jpg")`,
        }}
      >
        <div
          style={{ top: "500px" }}
          className="  absolute right-1 flex text-white"
        >
          <TripsCard
            title="Manali"
            imageUrl="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
          />

          {/* repetive code  */}
          <TripsCard
            title="Goa"
            imageUrl="https://images.unsplash.com/photo-1558960214-f4283a743867?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          />
          {/* repetive code  */}

          <TripsCard
            title="Kerela"
            imageUrl="https://images.unsplash.com/photo-1575561616684-c82e7ae67e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          />
          {/* repetive code  */}
          <TripsCard
            title="Leh Ladkh"
            imageUrl="https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          />
          {/* repetive code end */}
        </div>
      </div>
    </div>
  );
};

export default Trips;
