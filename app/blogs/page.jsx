import Link from "next/link";
import React from "react";
import { getSortedPostsData } from "@lib/posts";
import getFormattedDate from "@lib/getFormattedDate";
const Blogs = () => {
  const posts = getSortedPostsData();
  return (
    <div className="pt-[125px]">
      <div className="w-full h-[660px] relative">
        <img
          src="/assets/blog1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" mt-[40px] flex flex-col justify-center items-center ">
        <div className=" grid grid-cols-3 gap-x-8 mt-18 gap-y-8">
          {posts.map((ele) => {
            return (
              <div className="max-w-[350px] bg-white  border-b-2 border-black">
                <Link href={"blogs/" + ele.id} shallow className="w-fit">
                  <img
                    className="rounded-t-lg w-full"
                    src="/assets/blog1.jpg"
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <div>
                    <h2 className="mb-2 text-[13px] ">
                      {ele.place}, {getFormattedDate(ele.date)}
                    </h2>
                  </div>
                  <div>
                    <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-black">
                      {ele.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 line-clamp-4 dark:text-gray-400">
                      {ele.premise}
                    </p>
                  </div>
                  <Link
                    href={"blogs/" + ele.id}
                    shallow
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-darkbl rounded-sm transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
