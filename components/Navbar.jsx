import Image from "next/image";
// import logo from "/assets/logo.png"
//pt-3 pr-4 (ignore)

const Navbar = () => {
  return (
    <nav className="p-2 bg-transparent flex justify-between fixed w-full bg-white rounded-b-xl z-10 drop-shadow-2xl">
      <Image
        src="/assets/logo-only-outline.png"
        width={60}
        height={75}
        alt="logo"
        className="hover:cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
        // className=" bg-white"
      />
      <div className="flex gap-5 items-center text-black">
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
      <div className="flex gap-3 items-center">
        <button className="uppercase bg-transparent border rounded-md border-black  transform hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-2 w-28 h-10">
          Sign-in
        </button>
        <button className="uppercase bg-blue-700 text-white rounded-md border border-black transform hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-2 w-32 h-10">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
