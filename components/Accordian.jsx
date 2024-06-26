"use client";
import { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineCaretDown, AiFillCaretRight } from "react-icons/ai";

const Accordian = (props) => {
  const { day, title, description } = props;
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };
  console.log(isShowing);
  return (
    <div className="">
      <button
        className={
          isShowing
            ? "bg-[#3a3a3a] text-white transition-all ease-in-out  rounded-xl w-[600px] pl-4 pr-4 mb-4 "
            : " bg-zinc-300 rounded-xl w-[600px] pl-4 pr-4 mb-4 "
        }
        onClick={toggle}
        type="button"
      >
        <div className=" flex items-center">
          <div className=" w-[80px] text-left font-bold">Day-{day}:</div>
          <div className=" w-full text-left">{title}</div>
          <dir>{isShowing ? <AiOutlineCaretDown /> : <AiFillCaretRight />}</dir>
        </div>
      </button>
      <div
        className={`p-2  bg-zinc-300 mt-2 rounded-xl w-7/12 mb-4 list-inside ${
          isShowing ? "" : "hidden"
        }`}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  );
};

export default Accordian;
