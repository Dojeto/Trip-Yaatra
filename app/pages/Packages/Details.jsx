import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoLocationSharp } from "react-icons/io5";

const Details = () => {
  return (
    <div className=" max-w-full w-screen h-screen grid grid-cols-3">
      <div className=" ml-20 col-span-2 h-full">
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
                <h2>9N - 10D</h2>
              </div>
            </div>
            <div className="text-center m-2">
              <div className=" bg-zinc-300 rounded-full w-fit p-3 m-3">
                <LiaRupeeSignSolid size={32} />
              </div>
              <div>
                <h2>Starting Price</h2>
              </div>
              <div className=" font-bold text-lg">
                <h2>₹37,499/-</h2>
              </div>
            </div>
            <div className="text-center mt-2 mb-2">
              <div className=" bg-zinc-300 rounded-full w-fit p-3 ml-8 mt-3 mb-3">
                <IoLocationSharp size={32} />
              </div>
              <div>
                <h2>Pick-up and Drop</h2>
              </div>
              <div className=" font-bold text-lg">
                <h2>Srinagar - Delhi</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex gap-4">
          <button className=" bg-zinc-300 w-52 p-2 rounded-sm text-lg font-semibold">
            itinerary
          </button>
          <button className=" bg-zinc-300 w-52 p-2 rounded-sm text-lg font-semibold">
            Dates & Costing
          </button>
          <button className=" bg-zinc-300 w-52 p-2 rounded-sm text-lg font-semibold">
            Other Info
          </button>
        </div>
        <div>
          <h1 className="mt-10 text-3xl font-bold">About</h1>
          <div>
            <p className=" mt-4">
              Experience the majestic beauty of Ladakh with this 10-day Leh
              Ladakh tour package that takes you on a journey through some of
              the most breathtaking landscapes in the world. Starting from
              Srinagar, the capital of Jammu and Kashmir, the tour takes you to
              Kargil, Leh, Nubra, Pangong, Sarchu, and Manali before concluding
              in Delhi. The trip begins with a local sightseeing tour of
              Srinagar, followed by a visit to Kargil, famous for its role in
              the India-Pakistan war. From there, the journey proceeds towards
              Leh, the capital city of Ladakh, where you will explore popular
              attractions like Pathar Sahib Gurudwara, Magnetic Hill, and
              Sangam. The tour then takes you to Nubra Valley, a picturesque
              region known for its sand dunes and lush greenery. You will also
              visit Turtuk, a remote village located close to the Pakistan
              border that has recently been opened to tourists. From there, the
              journey continues to Pangong Tso, a serene high-altitude lake that
              changes color throughout the day, before heading back to Leh. The
              final leg of the tour takes you through Sarchu and Manali, two
              popular tourist destinations in Himachal Pradesh, before
              concluding in Delhi. With comfortable accommodations, well-planned
              itinerary, and expert guidance throughout the journey, this Leh
              Ladakh tour package promises an unforgettable experience for
              travelers seeking adventure and natural beauty.
            </p>
          </div>
        </div>
        <div>
          <h1 className="mt-10 text-3xl font-bold">videos</h1>
        </div>
        <div>
          <h1 className="mt-10 text-3xl font-bold">photos</h1>
        </div>
        <div>
          <h1 className="mt-10 text-3xl font-bold">testimonials</h1>
        </div>
        <div>
          <h1 className="mt-10 text-3xl font-bold">similar trips</h1>
        </div>
      </div>
      <div className=" pl-11">
        <div className=" top-32 sticky h-fit mt-14">
          <h1 className=" font-semibold text-lg text-center">
            Trips so perfect that Travelers want you to know more about their
            experiences!
          </h1>
          <div className=" p-5 flex justify-center mt-2">
            <iframe
              className=" rounded-md"
              width={350}
              height={200}
              src="https://www.youtube.com/embed/Qipxi1Qn8iE?si=6v825NToNqEa8BIL"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className=" font-semibold">
            <h1>Get In Touch</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
