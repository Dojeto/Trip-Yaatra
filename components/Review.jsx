import React from "react";
import Link from "next/link";
const Review = () => {
  return (
    <div className="container mt-[50px]  h-full px-36 flex flex-col gap-8">
      <div className="flex items-end justify-between flex-row text-center">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-2xl font-bold  text-darkvl">
            What Our Customers Saye
          </span>
        </div>
        <Link href="#" className="text-l text-gray-600 pointer-link">
          View All
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 w-120 mx-auto">
  <div className="mb-4 text-center flex">
    <div className="relative rounded-lg overflow-hidden w-96 h-72 ">
      <img
        src="/assets/bali-test.jpg"
        alt="Tour Image"
        className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform hover:scale-105 duration-300"
      />
    </div>
    <div>
      <dl>
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Staff</dt>
        <dd className="flex items-center mb-3">
          <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
            <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: '88%' }}></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
        </dd>
      </dl>
      <dl>
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Comfort</dt>
        <dd className="flex items-center mb-3">
          <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
            <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: '89%' }}></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.9</span>
        </dd>
      </dl>
    </div>
  </div>
  <div className="flex items-center mb-4">
    <img
      src="/assets/bali-test.jpg"
      alt="Person Image"
      className="w-20 h-20 rounded-full mr-4"
    />
    <div>
      <h2 className="text-blue-gray-500 text-xl font-medium mb-2">
        Tour Name
      </h2>
      <p className="text-blue-gray-500 text-lg font-medium mb-2">Tania Andrew</p>
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
        <p className="text-lg font-bold">4.95</p>
      </div>
    </div>
  </div>
  <p className="text-blue-gray-500 text-lg font-medium mb-4">
    "This is an excellent tour package. We had a fantastic experience and highly recommend it!"
  </p>
  <a
    href="#"
    className="text-lg font-medium text-gray-800 underline hover:no-underline"
  >
    Read Reviews
  </a>
</div>









    </div>
  );
};

export default Review;
