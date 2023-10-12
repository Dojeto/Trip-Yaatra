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
          <img
            src="/assets/logo.png"
            width={55}
            height={55}
            alt="logo"
          />
        </Link>
        <div className="hidden sm:flex ">
          <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
        </div>
        <div
          className={
            isOpen
              ? "  w-96 h-screen top-full right-0 transition-all duration-500 bg-darkvl absolute z-20 hidden sm:block"
              : " w-96 h-screen top-full -right-full transition-all duration-500  bg-darkvl absolute z-20 hidden sm:block"
          }
        >
          <ul className="flex flex-col text-white justify-center items-stretch">
            <li className=" border-b border-gray-300 py-2 px-6">
              <Link
                href={"/international-trips"}
                shallow
                onClick={() => setOpen(false)}
              >
                {" "}
                International Packages
              </Link>
            </li>
            <li className=" border-b border-gray-300 py-2 px-6">
              <Link
                href={"/india-trips"}
                shallow
                onClick={() => setOpen(false)}
              >
                Indian Packages
              </Link>
            </li>
            <li className=" border-b border-gray-300 py-2 px-6">
              <Link href={"/"} shallow onClick={() => setOpen(false)}>
                Weekend Trips
              </Link>
            </li>
            <li className=" border-b border-gray-300 py-2 px-6">
              <Link href={"/"} shallow onClick={() => setOpen(false)}>
                {" "}
                Group Tours
              </Link>
            </li>
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
          <li className="group/item relative">
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
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Vietnam
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Bali
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Thailand
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Maldives
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="group/item relative">
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
                <li className="p-1 text-sm">
                  <Link href={"/india-trips/ladakh"} shallow>
                    Ladakh
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/india-trips/"} shallow>
                    Spiti
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/india-trips/"} shallow>
                    Kashmir
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/india-trips/"} shallow>
                    Andaman
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/india-trips/"} shallow>
                    Kerala
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/india-trips/"} shallow>
                    Uttrakhand
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/india-trips/"} shallow>
                    Rajasthan
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="group/item relative">
            <div className="flex justify-center items-center my-2 gap-1 cursor-pointer">
              Weekend Trips <IoIosArrowDown />
            </div>
            <div className="group/edit invisible absolute  group-hover/item:visible  bg-white text-black rounded-md">
              <div className="absolute -top-1 left-1/3 transform -translate-x-1/2 w-4 h-4 bg-white  rotate-45"></div>

              <ul className="p-4">
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Vietnam
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Bali
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Thailand
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Maldives
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="group/item relative">
            <div className="flex justify-center items-center my-2 gap-1 cursor-pointer">
              Group Tours <IoIosArrowDown />
            </div>
            <div className="group/edit invisible absolute  group-hover/item:visible  bg-white text-black rounded-md">
              <div className="absolute -top-1 left-1/3 transform -translate-x-1/2 w-4 h-4 bg-white  rotate-45"></div>

              <ul className="p-4">
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Vietnam
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Bali
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Thailand
                  </Link>
                </li>
                <li className="p-1 text-sm">
                  <Link href={"/"} shallow>
                    Maldives
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
