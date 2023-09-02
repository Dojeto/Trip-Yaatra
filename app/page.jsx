import Image from "next/image";
import Navbar from "@components/Navbar";
import Booking from "@components/Booking";
export default function Home() {
  return (
    <main className="h-screen">
      <div className="">
      <Navbar />
      </div>
      
      <div
        className="bg-cover bg-center h-3/4"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80')`,
        }}
      >
        
        <div className="container mx-auto pt-40 text-center">
          <h1 className="tracking-wider font-homecontent text-3xl font-bold text-white">
            Explore the huge world
          </h1>
          <p className="font-homecontent tracking-wide text-3sxl font-bold text-white">
            out there and enjoy it's beauty
          </p>
        </div>
        <Booking/>
      </div>
    </main>
  );
}
