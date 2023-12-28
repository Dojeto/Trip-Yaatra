import Link from "next/link";
import React from "react";

const FeaturedBanner = (props) => {
  return (
    <div className="flex w-full px-36  justify-center items-center tblt:px-9 ">
      <Link href={props.link}>
        <img
          src={props.image}
          alt="featured banner"
          srcset=""
          className=" rounded-3xl object-cover tblt:rounded-md "
        />
      </Link>
    </div>
  );
};

export default FeaturedBanner;
