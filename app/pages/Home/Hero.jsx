import Search from "./Search";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Hero = (props) => {
  const { data }  = props;
  return (
    <div
      className="relative bg-cover bg-center w-full max-w-full h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(80, 80, 80, 0.1) 0%, rgb(0, 0, 0) 150%),url("/assets/Home/hero.jpg")`,
      }}
    >
      <div className="container mx-auto text-center z-10 text-5xl md:text-3xl">
        <h1
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="tracking-wider font-extrabold text-white"
        >
          Explore the huge world
        </h1>
        <p className="tracking-wide font-extrabold text-white">
          out there and enjoy its beauty
        </p>
      </div>
      {/* social media */}
      <div className="absolute z-10 top-0 right-0 h-full flex flex-col items-end justify-center space-y-6 p-4 mr-[25px] md:hidden">
        {/* section */}
        <div className="text-center p-2 rounded-full text-2xl">
          <Link href={"#"} shallow>
            <FaFacebookF className="text-white hover:text-blue-500" />
          </Link>
        </div>
        <div className="text-center p-2 rounded-full text-2xl">
          <Link href={"#"} shallow className="block">
            <BiLogoInstagramAlt className="text-white hover:text-pink-500" />
          </Link>
        </div>
        <div className="text-center p-2 rounded-full text-2xl">
          <Link href={"#"} shallow className="block">
            <FaTwitter className="text-white hover:text-blue-500" />
          </Link>
        </div>
        <div className="text-center p-2 rounded-full text-2xl">
          <Link href={"#"} shallow className="block">
            <FaLinkedinIn className="text-white hover:text-blue-400" />
          </Link>
        </div>

        {/* section */}
      </div>
      <Search data = {data} />

      <div className="w-8 absolute bottom-10 left-1/2">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce fill-current text-white "
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
            fill="currentColor"
          ></path>
        </svg>

        <span className="main__scroll-text text-white ">Scroll</span>
      </div>
    </div>
  );
};

export default Hero;