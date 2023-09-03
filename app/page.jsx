import Image from "next/image";
import Navbar from "@components/Navbar";
import Booking from "@components/Booking";
import Feature from "@components/Feature";
export default function Home() {
  return (
    <main className="h-screen">
      <div className="">
        <Navbar />
      </div>

      <div
        className="bg-cover bg-center h-full"
        style={{
          backgroundImage: `url("/assets/bg3.jpg")`,
        }}
      >
        <div className="container mx-auto pt-40 text-center">
          <h1 className="tracking-wider  text-5xl font-extrabold text-white">
            Explore the huge world
          </h1>
          <p className=" tracking-wide text-5xl font-extrabold text-white">
            out there and enjoy it's beauty
          </p>
        </div>
        <Booking />
      </div>
      <div className="bg-gray-200 h-full">
        <div className="container mx-auto pt-[30px] h-full">
          <div className="flex items-center justify-center flex-col text-center">
            <span class="text-4xl font-bold ml-4 transition-transform transform hover:scale-105 text-[#3b3b6e]">
              Explore the Hottest Destinations
            </span>
            <span class="text-xl mt-2 custom-blur">Trending this Month</span>
          </div>

          <div className="flex justify-center mt-8 mx-2">
            <Feature />
          </div>
        </div>
      </div>
    </main>
  );
}
