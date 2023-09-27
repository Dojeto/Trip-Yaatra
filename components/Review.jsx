"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";
import Link from "next/link";
import Flicking from "@egjs/react-flicking";
import { AutoPlay, Fade } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
const Review = () => {
  //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const plugins = [
    new AutoPlay({ duration: 4000, direction: "NEXT", stopOnHover: false }),
    new Fade(),
  ];
  const reviews = [
    {
      tourName: "Tour Name 1",
      personName: "Tania Andrew",
      rating: 4.95,
      date: "19/09/2023",
      reviewText:
        "This is an excellent tour package. We had a fantastic experience and highly recommend it!",
      image: "/assets/bali-test.jpg",
    },
    {
      tourName: "Tour Name 2",
      personName: "Priyanshu",
      rating: 4.95,
      date: "19/09/2023",
      reviewText:
        "This is an excellent tour package. We had a fantastic experience and highly recommend it!",
      image: "/assets/bali-test.jpg",
    },
    {
      tourName: "Tour Name 3",
      personName: "Priyanshu",
      rating: 4.95,
      date: "19/09/2023",
      reviewText:
        "This is an excellent tour package. We had a fantastic experience and highly recommend it!",
      image: "/assets/bali-test.jpg",
    },
    {
      tourName: "Tour Name 4",
      personName: "Priyanshu",
      rating: 4.95,
      date: "19/09/2023",
      reviewText:
        "This is an excellent tour package. We had a fantastic experience and highly recommend it!",
      image: "/assets/bali-test.jpg",
    },

    // Add more review objects here for additional cards
  ];

  // const nextCard = () => {
  //   setCurrentCardIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  // };

  // const prevCard = () => {
  //   setCurrentCardIndex((prevIndex) =>
  //     prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
  //   );
  // };

  // const currentReview = reviews[currentCardIndex];

  return (
    <div className=" mt-[50px] h-full px-36 flex flex-col justify-center items-center gap-8">
      <div>
        <h2 className=" m-3 font-bold text-center text-darkbl text-4xl">
          What our Customer Say
        </h2>
      </div>
      <div className=" bg-highlight w-[120px] h-[3px] mt-1 mb-11"></div>
      {/* <div className="flex items-end justify-between flex-row text-center">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-2xl font-bold text-darkvl">
            What Our Customers Say
          </span>
        </div>
        <Link href="#" className="text-l text-gray-600 pointer-link">
          View All
        </Link>
      </div> */}
      {/* <Flicking plugins={plugins} circular={true} align="prev"> */}
      <div className=" grid gap-3 justify-center grid-cols-2">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex gap-4 bg-white border border-gray-300 shadow-md   rounded-lg overflow-hidden w-full mr-8 p-6  mx-auto relative"
          >
            <div className="w-24 h-24 aspect-square border-2 rounded-full flex justify-center items-center border-darkvl">
              <img
                src={review.image}
                alt="Person Image"
                className="w-20 h-20 aspect-square rounded-full object-cover "
              />
            </div>
            <div className="">
              {/* <h2 className="text-blue-gray-500 text-xl font-medium mb-2">
                {review.tourName}
              </h2> */}
              <div className="flex justify-between items-center">
                <p className="text-blue-gray-500 text-lg font-medium">
                  {review.personName}
                </p>
                <div className="flex items-center text-yellow-300">
                  {/* <FaStar className="w-5 h-5 text-yellow-300 mr-1" /> */}
                  {/* <p className="text-lg font-bold">{review.rating}</p> */}
                  <LiaStarSolid className="w-5 h-5 text-yellow-300 " />
                  <LiaStarSolid className="w-5 h-5 text-yellow-300 " />
                  <LiaStarSolid className="w-5 h-5 text-yellow-300 " />
                  <LiaStarSolid className="w-5 h-5 text-yellow-300 " />
                  <LiaStarSolid className="w-5 h-5 text-yellow-300 " />
                </div>
              </div>
              <div>{review.date}</div>
              <p className="relative text-gray-600  text-sm font-regular pt-4 pl-4 overflow-hidden text-ellipsis">
                <span className="absolute top-2 left-2 -ml-2 font-medium text-4xl text-darkvl font-sans">
                  “
                </span>
                {review.reviewText}
              </p>
              <a className="flex justify-end items-end text-darkvl font-medium ">
                <span className="cursor-pointer">Continue Reading</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* </Flicking> */}
    </div>
  );
};

export default Review;
