import React from "react";
import DestinationCard from "@components/DestinationCard";

const Todo = (props) => {
  const { data } = props;
  return (
    <div className=" flex flex-col justify-center items-center mt-28 mx-[10%]">
      <div>
        <h2 className=" m-3 font-bold text-left text-darkbl text-5xl">
          {data?.shop.title}
        </h2>
        <h2 className=" m-3 font-normal text-lg text-gray-500">
          {data?.shop.subtitle}
        </h2>
      </div>
      <div className=" bg-highlight w-[120px] h-[3px] mt-2 mb-11"></div>
      <div className="grid grid-cols-3 gap-x-8">
        {/* <div className="flex flex-wrap justify-center items-start"> */}
        {data?.shop.items.map((val, i) => (
          <DestinationCard
            key={i}
            imageUrl={val.imageUrl}
            time={val.time}
            title={val.title}
            shopFor={val.shopFor}
            content={val.content}
            location={val.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
