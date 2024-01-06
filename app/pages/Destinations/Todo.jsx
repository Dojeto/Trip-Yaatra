import React from "react";
import DestinationCard from "@components/DestinationCard";

const Todo = (props) => {
  const { data } = props;
  return (
    <div className="mx-[9%] flex flex-col justify-start items-start">
      <div>
        <h2 className=" m-3 font-bold text-left text-darkbl text-5xl">
          {data?.todos?.title}
        </h2>
        <h2 className=" m-3 font-normal text-lg text-gray-500">
          {data?.todos?.subtitle}
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-5 lg:grid-cols-2 md:grid-cols-1">
        {/* <div className="flex flex-wrap justify-center items-start"> */}
        {data?.todos?.todo?.map((val, i) => (
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
