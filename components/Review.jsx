"use client";
import React from "react";

import { LiaStarSolid } from "react-icons/lia";
import { AutoPlay, Fade } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import Link from "next/link";
const Review = () => {
  //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const plugins = [
    new AutoPlay({ duration: 4000, direction: "NEXT", stopOnHover: false }),
    new Fade(),
  ];
  const reviews = [
    {
      tourName: "Tour Name 1",
      personName: "Suchitah beck",
      rating: 4.95,
      date: "17/09/2023",
      reviewText:
        "Our trip experience to Vietnam was excellent very comfortable we enjoyed very much, food was exlent ,sightseeing was amazing we can think to come for second time also, trip was well organised",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg",
      link: "https://g.co/kgs/BD6U99",
    },
    {
      tourName: "Tour Name 2",
      personName: "Abhishek Tiwari",
      rating: 4.95,
      date: "19/03/2023",
      reviewText:
        "Best service and prices....i got these twice first when I booked domestic flight and second Time when I booked international trip. Process is smooth and support is best. They helped me with the good prices and visa as well.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg",
      link: "https://g.co/kgs/SNDei8",
    },
    {
      tourName: "Tour Name 3",
      personName: "Ankur Arora",
      rating: 4.95,
      date: "19/05/2023",
      reviewText:
        "Thats the best travel planning company, they have planned my trip to Dubai, and it was too good, starting from itenary to hotel selection and everything.Would definitely recommend if you are planning for a trip.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg",
      link: "https://g.co/kgs/dWr7pX",
    },
    {
      tourName: "Tour Name 4",
      personName: "Aditi Thanekar",
      rating: 4.95,
      date: "25/05/2023",
      reviewText:
        "Booked a trip for Goa and honestly best experience. Best deals for Hotels and flights. Made my experience beautiful and hassle free. I loved my experience with Tripyatra.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg",
      link: "https://g.co/kgs/dDq2tR",
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
    <div className="h-full px-36 flex flex-col justify-center items-center gap-1 md:px-16">
      <div>
        <h2 className=" m-3 font-bold text-center text-darkbl text-4xl sm:2xl">
          What our Customer Say
        </h2>
      </div>
      <div className=" bg-highlight w-[120px] h-[3px] mt-1 mb-11"></div>

      <div className=" grid gap-3 justify-center grid-cols-2 md:grid-cols-1">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex gap-4 bg-white border border-gray-300 shadow-md   rounded-lg overflow-hidden w-full mr-8 p-6 mx-auto relative md:flex-col md:justify-center md:items-center"
          >
            <div className="w-24 h-24 aspect-square border-2 rounded-full flex justify-center items-center border-darkvl tblt:w-16 tblt:h-16">
              <img
                src={review.image}
                alt="Person Image"
                className="w-20 h-20 aspect-square rounded-full object-cover tblt:w-12 tblt:h-12"
              />
            </div>
            <div className="">
              <div className="flex justify-between items-center">
                <p className="text-blue-gray-500 text-lg font-medium">
                  {review.personName}
                </p>
                <div className="flex items-center text-yellow-300">
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
              <div className="flex justify-end items-end text-darkvl font-medium ">
                <Link
                  key={review.personName}
                  href={review.link}
                  className="cursor-pointer"
                >
                  Continue Reading
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </Flicking> */}
    </div>
  );
};

export default Review;
