import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="z-20 fixed  w-full">
      <div className="py-2 px-6 flex justify-between items-center  bg-slate-100">
        <a href="/">
          <img
            // src="/assets/logo-new.png"
            src="/assets/black-transparent.png"
            width={55}
            height={55}
            alt="logo"
            // className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </a>
        <div className="flex text-black">
          <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-30 h-10">
            <a href="tel:+91-8698378811">+91 8698378811</a>
          </button>
          <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
            <a href="">Blogs</a>
          </button>
          <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
            <a href="">Contact</a>
          </button>
          <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
            <a href="">About Us</a>
          </button>
        </div>
      </div>
      <div className="p-2 z-20 flex justify-between items-center fixed w-full bg-darkvl">
        <ul className="flex gap-10 ml-10 text-white">
          <li className="group/item relative">
            <a
              href="/international-trips"
              className="flex justify-center items-center my-2 gap-1 cursor-pointer"
            >
              International Packages <IoIosArrowDown />
            </a>
            <div className="group/edit invisible absolute  group-hover/item:visible  bg-white text-black rounded-md">
              <div className="absolute -top-1 left-1/3 transform -translate-x-1/2 w-4 h-4 bg-white  rotate-45"></div>

              <ul className="p-4">
                <li className="p-1 text-sm">
                  <a href="/">Vietnam</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Bali</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Thailand</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Maldives</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="group/item relative">
            <a
              href="/india-trips"
              className="flex justify-center items-center my-2 gap-1 cursor-pointer"
            >
              Indian Packages <IoIosArrowDown />
            </a>
            <div className="group/edit invisible absolute  group-hover/item:visible  bg-white text-black rounded-md">
              <div className="absolute -top-1 left-1/3 transform -translate-x-1/2 w-4 h-4 bg-white  rotate-45"></div>

              <ul className="p-4">
                <li className="p-1 text-sm">
                  <a href="/india-trips/ladakh">Ladakh</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Spiti</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Kashmir</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Andaman</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Kerala</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Uttrakhand</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Rajasthan</a>
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
                  <a href="/">Vietnam</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Bali</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Thailand</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Maldives</a>
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
                  <a href="/">Vietnam</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Bali</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Thailand</a>
                </li>
                <li className="p-1 text-sm">
                  <a href="/">Maldives</a>
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
