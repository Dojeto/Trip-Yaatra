"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="z-20 fixed w-full md:text-sm">
      <div className="py-2 px-6 flex justify-between items-center bg-slate-100">
        <Link href={"/"}>
          <img src="/assets/logo.png" width={55} height={55} alt="logo" />
        </Link>
        <div className="hidden sm:flex ">
          <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
        </div>
        <div
          className={
            isOpen
              ? "  w-96 h-screen top-full right-0 xs:w-48 transition-all duration-500 bg-darkvl absolute z-20 hidden sm:block"
              : " w-96 xs:w-48 h-screen top-full -right-full transition-all duration-500  bg-darkvl absolute z-20 hidden sm:block"
          }
        >
          <ul className="flex flex-col text-white justify-center items-stretch">
            <div className=" border-b border-gray-300 py-2 px-6">
              <Link
                href={"/international-trips"}
                shallow
                onClick={() => setOpen(false)}
              >
                {" "}
                International Packages
              </Link>
            </div>
            <div className=" border-b border-gray-300 py-2 px-6">
              <Link
                href={"/india-trips"}
                shallow
                onClick={() => setOpen(false)}
              >
                Indian Packages
              </Link>
            </div>
            <div className=" border-b border-gray-300 py-2 px-6">
              <Link href={"/"} shallow onClick={() => setOpen(false)}>
                Weekend Trips
              </Link>
            </div>
            <div className=" border-b border-gray-300 py-2 px-6">
              <Link href={"/"} shallow onClick={() => setOpen(false)}>
                {" "}
                Group Tours
              </Link>
            </div>
          </ul>
          <ul className="flex flex-col font-medium text-white justify-center items-stretch px-6 py-3 gap-3">
            <li>Blogs</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="flex text-black sm:hidden">
          <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-30 h-10">
            <Link href={"tel:+91-8698378811"} shallow>
              +91 8698378811
            </Link>
          </button>
          <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
            <Link href={"/blogs"} shallow>
              Blogs
            </Link>
          </button>
          <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
            <Link href={""} shallow>
              Contact
            </Link>
          </button>
          <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
            <Link href={"/about-us"} shallow>
              About Us
            </Link>
          </button>
        </div>
      </div>
      <div className="p-2 z-20 flex justify-between items-center fixed w-full bg-darkvl sm:hidden">
        <ul className="flex gap-10 ml-10 text-white">
          <div className="group/item relative">
            <Link
              href={"/international-trips"}
              shallow
              className="flex justify-center items-center my-2 gap-1 cursor-pointer"
            >
              International Packages <IoIosArrowDown />
            </Link>
            <div className="group/edit invisible absolute  group-hover/item:visible  bg-white text-black rounded-md">
              <div className="absolute -top-1 left-1/3 transform -translate-x-1/2 w-4 h-4 bg-white  rotate-45"></div>

              <ul className="p-4">
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Vietnam
                  </div>
                </Link>
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Bali
                  </div>
                </Link>
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Thailand
                  </div>
                </Link>
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Maldives
                  </div>
                </Link>
              </ul>
            </div>
          </div>
          <div className="group/item relative">
            <Link
              href={"/india-trips"}
              shallow
              className="flex justify-center items-center my-2 gap-1 cursor-pointer"
            >
              Indian Packages <IoIosArrowDown />
            </Link>
            <div className="group/edit invisible absolute  group-hover/item:visible  bg-white text-black rounded-md">
              <div className="absolute -top-1 left-1/3 transform -translate-x-1/2 w-4 h-4 bg-white  rotate-45"></div>

              <ul className="p-4">
                <Link href={"/india-trips/ladakh"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Ladakh
                  </div>
                </Link>
                <Link href={"/india-trips/spiti"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Spiti
                  </div>
                </Link>
                <Link href={"/india-trips/ladakh"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Kashmir
                  </div>
                </Link>
                <Link href={"/india-trips/andaman"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Andaman
                  </div>
                </Link>
                <Link href={"/india-trips/kerala"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Kerala
                  </div>
                </Link>
                <Link href={"/india-trips/uttarakhand"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Uttrakhand
                  </div>
                </Link>
                <Link href={"/india-trips/rajasthan"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Rajasthan
                  </div>
                </Link>
              </ul>
            </div>
          </div>
          <div className="group/item relative">
            <div className="flex justify-center items-center my-2 gap-1 cursor-pointer">
              Weekend Trips <IoIosArrowDown />
            </div>
            <div className="group/edit invisible absolute  group-hover/item:visible  bg-white text-black rounded-md">
              <div className="absolute -top-1 left-1/3 transform -translate-x-1/2 w-4 h-4 bg-white  rotate-45"></div>

              <ul className="p-4">
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Vietnam
                  </div>
                </Link>
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Bali
                  </div>
                </Link>
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Thailand
                  </div>
                </Link>
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Maldives
                  </div>
                </Link>
              </ul>
            </div>
          </div>
          <div className="group/item relative">
            <div className="flex justify-center items-center my-2 gap-1 cursor-pointer">
              Group Tours <IoIosArrowDown />
            </div>
            <div className="group/edit invisible absolute  group-hover/item:visible  bg-white text-black rounded-md">
              <div className="absolute -top-1 left-1/3 transform -translate-x-1/2 w-4 h-4 bg-white  rotate-45"></div>

              <ul className="p-4">
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Vietnam
                  </div>
                </Link>
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Bali
                  </div>
                </Link>
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Thailand
                  </div>
                </Link>
                <Link href={"/"} shallow>
                  <div className="px-2 py-1 text-sm border-[1px] border-transparent rounded-md hover:bg-[#01afd10d] hover:border-darkvl hover:text-darkbl">
                    Maldives
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
