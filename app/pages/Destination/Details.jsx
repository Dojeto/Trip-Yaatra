
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const Details = () => {
  return (
    <div className=" max-w-full w-screen h-screen bg-black grid grid-cols-3">
      <div className=" col-span-2 bg-red-500 h-full flex justify-center">
        <div className=" m-7 flex gap-7">
          <div className=" bg-slate-400 rounded-full w-fit p-3">
            <AiOutlineClockCircle size={35} />
          </div>
          <div className=" bg-slate-400 rounded-full w-fit p-3">
            <AiOutlineClockCircle size={35} />
          </div>
          <div className=" bg-slate-400 rounded-full w-fit p-3">
            <AiOutlineClockCircle size={35} />
          </div>
        </div>
      </div>
      <div className=" bg-yellow-500">
        <div className=" top-12 sticky bg-slate-500 h-7">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolor ducimus. Atque repellendus obcaecati perspiciatis quisquam ex aut quo culpa id ipsa iusto architecto similique suscipit tempore natus, eaque neque! */}
        </div>
      </div>
      <div>
      
     
      </div>
     
    </div>
  );
};

export default Details;
