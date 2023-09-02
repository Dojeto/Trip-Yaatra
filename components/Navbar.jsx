import Image from "next/image";
// import logo from "/assets/logo.png"
//pt-3 pr-4 (ignore)

const Navbar = () => {
  return (
    <nav className="p-2 bg-transparent flex justify-between fixed w-full">
      <Image src="/assets/logo.png" width={150} height={150} alt="logo" />
      <div className="flex gap-5 items-center">
        <button className="bg-transparent text-lime-100 hover:bg-gray-200 hover:text-gray-700 px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-30 h-10">
          Home
        </button>
        <button className="bg-transparent text-lime-100 hover:bg-gray-200 hover:text-gray-700 px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
          Reviews
        </button>
        <button className="bg-transparent text-lime-100 hover:bg-gray-200 hover:text-gray-700 px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
          Pakages
        </button>
        <button className="bg-transparent text-lime-100 hover:bg-gray-200 hover:text-gray-700 px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
          Videos
        </button>
        <button className="bg-transparent text-lime-100 hover:bg-gray-200 hover:text-gray-700 px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-32 h-10">
          fights
        </button>
      </div>
      <div className="flex gap-3 items-center">
        <button className="bg-transparent border border-lime-100 text-lime-100 hover:bg-gray-100 hover:text-gray-700 hover:border-gray-700 px-4 py-2 w-28 h-10">
          Sign-in
        </button>
        <button className="bg-transparent border border-lime-100 text-lime-100 hover:bg-gray-100 hover:text-gray-700 hover:border-gray-700 px-4 py-2 w-32 h-10">
          Sign-Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
