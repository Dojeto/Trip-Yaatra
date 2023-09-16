'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Review = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const reviews = [
    {
      id: 1,
      tourName: "Tour Name 1",
      personName: "Tania Andrew",
      rating: 4.95,
      reviewText: "This is an excellent tour package. We had a fantastic experience and highly recommend it!",
      image: "/assets/bali-test.jpg",
    },
    {
      id: 1,
      tourName: "Tour Name 2",
      personName: "Priyanshu",
      rating: 4.95,
      reviewText: "This is an excellent tour package. We had a fantastic experience and highly recommend it!",
      image: "/assets/bali-test.jpg",
    },
    
    // Add more review objects here for additional cards
  ];

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentCardIndex];

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

      <div className="bg-[#80d2ed] shadow-lg rounded-lg overflow-hidden p-6 w-120 mx-auto relative">
        <div className="mb-4 text-center flex">
          <div className="relative rounded-lg overflow-hidden w-96 h-72">
            <img
              src={currentReview.image}
              alt="Tour Image"
              className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform hover:scale-105 duration-300"
            />
          </div>
        </div>
        <div className="flex items-center mb-4">
          <img
            src={currentReview.image}
            alt="Person Image"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h2 className="text-blue-gray-500 text-xl font-medium mb-2">
              {currentReview.tourName}
            </h2>
            <p className="text-blue-gray-500 text-lg font-medium mb-2">
              {currentReview.personName}
            </p>
            <div className="flex items-center text-yellow-300">
              <svg
                className="w-5 h-5 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="text-lg font-bold">{currentReview.rating}</p>
            </div>
          </div>
        </div>
        <p className="text-blue-gray-500 text-lg font-medium mb-4">
          "{currentReview.reviewText}"
        </p>
        <button
        onClick={prevCard}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-gray-500 text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-blue-gray-700 cursor-pointer"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextCard}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-gray-500 text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-blue-gray-700 cursor-pointer"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      </div>

      {/* Previous Button */}
     
    </div>
  );
};

export default Review;
