import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { LuMessageSquare } from "react-icons/lu";
export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      <button
        className="bg-darkvl p-2 rounded-md w-36 h-11 text-white active:bg-darkbl hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Contact Us
      </button>
      {showModal ? (
        <>
          <div className=" overflow-hidden h-fit sm:h-full animate-scale justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-[5000ms]">
            <div className="relative w-auto my-6 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Contact Us</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex flex-col justify-center items-center sm:flex-row">
                  <div className="max-w-[30vw]">
                    <img
                      src="/assets/contact-us.png"
                      alt="contact us"
                      className="w-full h-full p-3 object-cover"
                    />
                  </div>
                  <form className="bg-darkvl bg-opacity-20 px-24 py-6 flex flex-col justify-center items-center gap-2">
                    {/* name */}
                    <div className="flex flex-col justify-start items-start gap-2">
                      <label htmlFor="email">Your Name:</label>
                      <div className="border border-darkbl bg-white rounded-md p-1 flex justify-center items-center text-gray-500">
                        <IoPersonOutline size={25} />
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="text-black p-2 focus:outline-none w-full"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    {/* email */}
                    <div className="flex flex-col justify-start items-start gap-2">
                      <label htmlFor="email">Your Email:</label>
                      <div className="border border-darkbl bg-white rounded-md p-1 flex justify-center items-center text-gray-500">
                        <HiOutlineMail size={25} />
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="text-black p-2 focus:outline-none w-full"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    {/* phone */}
                    <div className="flex flex-col justify-start items-start gap-2">
                      <label htmlFor="email">Your Phone Number:</label>
                      <div className="border border-darkbl bg-white rounded-md p-1 flex justify-center items-center text-gray-500">
                        <HiOutlinePhone size={25} />
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          className="text-black p-2 focus:outline-none w-full"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    {/* message */}
                    <div className="flex flex-col justify-start items-start gap-2">
                      <label htmlFor="email">Your Message:</label>
                      <div className="border border-darkbl bg-white rounded-md p-1 flex justify-center items-center text-gray-500">
                        <LuMessageSquare size={25} />
                        <input
                          type="text"
                          name="message "
                          id="message   "
                          className="text-black p-2 focus:outline-none w-full"
                          placeholder="Enter your message   "
                        />
                      </div>
                    </div>
                    <button
                      className="bg-darkvl text-white active:bg-darkbl w-full font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Submit
                    </button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"></div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
