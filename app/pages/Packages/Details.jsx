"use client";
import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoLocationSharp } from "react-icons/io5";
import TripsCard from "@components/TripsCard";
import Itinerary from "./Itinerary";
import AboutTrip from "./AboutTrip";
import Date from "./Date";
import Others from "./Others";
import Link from "next/link";
const Details = (props) => {
  const {
    duration,
    price,
    pickdrop,
    about,
    notes,
    photos,
    ytvideo,
    similartrips,
    itinerary,
  } = props;
  // console.log(props);
  const info = {
    about: <AboutTrip about={about} />,
    itinerary: <Itinerary notes={notes} itinerary={itinerary} />,
    date: <Date />,
    other: <Others />,
  };

  const [selected, setSelected] = useState("about");
  const ChangeState = (e) => {
    setSelected(e.target.id);
  };
  // console.log(similartrips);
  return (
    <div className=" max-w-full w-screen grid grid-cols-3 tblt:flex tblt:flex-col tblt:overflow-x-hidden">
      <div className=" ml-20 col-span-2 h-full tblt:mx-20">
        <div className="flex m-7">
          <div className=" flex gap-7">
            <div className="text-center m-2">
              <div className=" bg-zinc-300 rounded-full w-fit p-3 m-3">
                <AiOutlineClockCircle size={32} />
              </div>
              <div>
                <h2>Duration</h2>
              </div>
              <div className=" font-bold text-lg">
                <h2>{duration}</h2>
              </div>
            </div>
            {price ? (
              <div className="text-center m-2">
                <div className=" bg-zinc-300 rounded-full w-fit p-3 m-3">
                  <LiaRupeeSignSolid size={32} />
                </div>
                <div>
                  <h2>Starting Price</h2>
                </div>
                <div className=" font-bold text-lg">
                  <h2>₹{price}/-</h2>
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="text-center mt-2 mb-2">
              <div className=" bg-zinc-300 rounded-full w-fit p-3 ml-8 mt-3 mb-3">
                <IoLocationSharp size={32} />
              </div>
              <div>
                <h2>Pick-up and Drop</h2>
              </div>
              <div className=" font-bold text-lg">
                <h2>{pickdrop}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex gap-4">
          <button
            id="itinerary"
            onClick={(e) => {
              ChangeState(e);
            }}
            className=" bg-zinc-300 w-52 p-2 rounded-sm text-lg font-semibold hover:scale-105 transition-all hover:bg-[#3a3a3a] hover:text-white"
          >
            Itinerary
          </button>
          <button
            id="date"
            onClick={(e) => {
              ChangeState(e);
            }}
            className=" bg-zinc-300 w-52 p-2 rounded-sm text-lg font-semibold  hover:scale-105 transition-all hover:bg-[#3a3a3a] hover:text-white"
          >
            What's Included?
          </button>
          <button
            id="other"
            onClick={(e) => {
              ChangeState(e);
            }}
            className=" bg-zinc-300 w-52 p-2 rounded-sm text-lg font-semibold hover:scale-105 transition-all hover:bg-[#3a3a3a] hover:text-white"
          >
            Other Info
          </button>
        </div>
        <div>{info[selected]}</div>
        <div>
          <h1 className="mt-10 text-3xl font-bold">Photos</h1>
          <div className="w-full flex overflow-x-scroll gap-8 no-scrollbar">
            {photos.map((ele, i) => {
              return (
                <>
                  <img
                    key={i}
                    src={ele}
                    alt=""
                    className=" w-80 aspect-video object-cover rounded-xl"
                  />
                </>
              );
            })}
          </div>
        </div>
        {/* <div>
          <h1 className="mt-10 text-3xl font-bold">Testimonials</h1>
        </div> */}
      </div>
      <div className=" pl-11 tblt:hidden">
        <div className=" top-32 sticky h-fit mt-14 w-11/12">
          <h1 className=" font-semibold text-lg text-center">
            Trips so perfect that Travelers want you to know more about their
            experiences!
          </h1>
          <div className=" pt-5 pb-5 mt-2">
            <iframe
              className=" rounded-md"
              width={"100%"}
              height={220}
              src={ytvideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="">
            <h1 className="font-bold text-xl mb-3">Get In Touch</h1>
            <form action="">
              <div>
                <label htmlFor="name" className=" text-sm font-semibold">
                  Full Name *
                </label>
                <input
                  id="name"
                  placeholder="Enter your name *"
                  className=" w-full rounded-lg border border-zinc-400 p-4 text-sm shadow-sm h-2 mt-2 mb-2"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="name" className=" text-sm font-semibold">
                  Contact No. *
                </label>
                <input
                  id="name"
                  placeholder="Enter your number *"
                  className=" w-full rounded-lg border border-zinc-400 p-4 text-sm shadow-sm h-2 mt-2 mb-2"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="name" className=" text-sm font-semibold">
                  Email ID *
                </label>
                <input
                  id="name"
                  placeholder="Enter your email *"
                  className=" w-full rounded-lg border border-zinc-400 p-4 text-sm shadow-sm h-2 mt-2 mb-2"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="name" className=" text-sm font-semibold">
                  Preferred Destination *
                </label>
                <input
                  id="name"
                  placeholder="Enter your preferred place *"
                  className=" w-full rounded-lg border border-zinc-400 p-4 text-sm shadow-sm h-2 mt-2 mb-2"
                  type="text"
                />
              </div>
              <div>
                <button className=" mt-3 bg-slate-700 text-white w-36 h-9 rounded-md">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="ml-20 tblt:mx-20">
        <h1 className="mt-10 text-3xl font-bold">similar trips</h1>
        <div className=" flex w-[220%] overflow-x-scroll no-scrollbar tblt:w-full">
          {similartrips.map((ele) => {
            return (
              <Link href={ele.link} shallow>
                <TripsCard imageUrl={ele.imageUrl} title={ele.title} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
