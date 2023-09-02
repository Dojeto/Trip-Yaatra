import Image from "next/image";
// import logo from "/assets/logo.png"
//pt-3 pr-4 (ignore)

const Navbar = () => {
  return (
  

    <nav className=" p-[10px] flex justify-between items-center w-full bg-gray-100  mx-auto h-[75px]">
      <div>
        <Image src="/assets/logo.png" width={150} height={150} alt="logo" />
      </div>
      <div classNameName="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <button className="bg-transparent text-black-100 hover:bg-gray-200 hover:text-gray-700 px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-30 h-10">
            Home
          </button>
          
          <button className="bg-transparent text-black-100 hover:bg-gray-200 hover:text-gray-700 px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-30 h-10">
            Reviews
          </button>
          <button className="bg-transparent text-black-100 hover:bg-gray-200 hover:text-gray-700 px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-30 h-10">
            Pakages
          </button>
          <button className="bg-transparent text-black-100 hover:bg-gray-200 hover:text-gray-700 px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-30 h-10">
            Videos
          </button>
          <button className="bg-transparent text-black-100 hover:bg-gray-200 hover:text-gray-700 px-4 py-2 transform hover:scale-105 transition-transform duration-300 ease-in-out w-30 h-10">
            fights
          </button>
        </ul>
      </div>
      <div className="flex gap-3 items-center">
  <button className="bg-gray-100 border border-gray-500 text-gray-700 hover:bg-gray-500 hover:text-white hover:border-gray-700 px-4 py-2 w-28 h-10 rounded-md">
    Sign-in
  </button>
  <button className="bg-gray-100 border border-gray-500 text-gray-700 hover:bg-gray-500 hover:text-white hover:border-gray-700 px-4 py-2 w-32 h-10 rounded-md">
    Sign-Up
  </button>
</div>

    </nav>
  );
};

export default Navbar;
