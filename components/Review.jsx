"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Flicking from "@egjs/react-flicking";
import { AutoPlay, Fade } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
const Review = () => {
  //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
    new Fade(),
  ];
  const reviews = [
    {
      tourName: "Tour Name 1",
      personName: "Tania Andrew",
      rating: 4.95,
      reviewText:
        "This is an excellent tour package. We had a fantastic experience and highly recommend it!",
      image: "/assets/bali-test.jpg",
    },
    {
      tourName: "Tour Name 2",
      personName: "Priyanshu",
      rating: 4.95,
      reviewText:
        "This is an excellent tour package. We had a fantastic experience and highly recommend it!",
      image: "/assets/bali-test.jpg",
    },
    {
      tourName: "Tour Name 3",
      personName: "Priyanshu",
      rating: 4.95,
      reviewText:
        "This is an excellent tour package. We had a fantastic experience and highly recommend it!",
      image: "/assets/bali-test.jpg",
    },
    {
      tourName: "Tour Name 4",
      personName: "Priyanshu",
      rating: 4.95,
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
    <div className="container mt-[50px] h-full px-36 flex flex-col gap-8">
      <div className="flex items-end justify-between flex-row text-center">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-2xl font-bold text-darkvl">
            What Our Customers Say
          </span>
        </div>
        <Link href="#" className="text-l text-gray-600 pointer-link">
          View All
        </Link>
      </div>
      <Flicking plugins={plugins} circular={true} align="prev">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-gray-400 drop-shadow-2xl shadow-2xl rounded-lg overflow-hidden mr-8 p-6 w-120 mx-auto relative"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt="Person Image"
                className="w-20 h-20 rounded-full mr-4"
              />
              <div>
                <h2 className="text-blue-gray-500 text-xl font-medium mb-2">
                  {review.tourName}
                </h2>
                <p className="text-blue-gray-500 text-lg font-medium mb-2">
                  {review.personName}
                </p>
                <div className="flex items-center text-yellow-300">
                  <FaStar className="w-5 h-5 text-yellow-300 mr-1" />
                  <p className="text-lg font-bold">{review.rating}</p>
                </div>
              </div>
            </div>
            <p className="text-blue-gray-500 text-lg font-medium mb-4">
              "{review.reviewText}"
            </p>
          </div>
        ))}

        {/* Previous Button */}
      </Flicking>
    </div>
  );
};

export default Review;
