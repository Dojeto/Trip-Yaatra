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
        className=" bg-zinc-300 rounded-xl w-[600px] pl-4 pr-4 mb-4 "
        onClick={toggle}
        type="button"
      >
        <div className=" flex items-center">
          <div className=" w-[80px] text-left">Day-{day}:</div>
          <div className=" w-full text-left">{title}</div>
          <dir>{isShowing ? <AiOutlineCaretDown /> : <AiFillCaretRight />}</dir>
        </div>
      </button>
      <div
        className={`p-2  bg-zinc-300 mt-2 rounded-xl w-96 mb-4 ${
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
