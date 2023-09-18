import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="p-2 z-20 flex justify-between fixed w-full bg-slate-100">
      <Image
        src="/assets/logo.png"
        width={110}
        height={75}
        alt="logo"
        className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <div className="flex text-black">
        <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-30 h-10">
          Home
        </button>
        <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
          Reviews
        </button>
        <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
          Packages
        </button>
        <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
          Videos
        </button>
        <button className="uppercase bg-transparent hover:bg-gray-200 hover:text-gray-700 hover:rounded-md px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
          fights
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
