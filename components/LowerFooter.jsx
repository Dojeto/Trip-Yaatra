import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";

const LowerFooter = () => {
  return (
    <div className="flex flex-col justify-center h-full items-center mt-[80px] mb-9 md:flex md:items-center md:justify-center  mx-[10px] xs:mx-[30px]">
      <div className="flex flex-row gap-7">
        <Link href={"/"} shallow>
          <BiLogoFacebookCircle size={45} />
        </Link>
        <Link href={"/"} shallow>
          <BiLogoInstagramAlt size={45} />
        </Link>
        <Link href={"/"} shallow>
          <BiLogoLinkedinSquare size={45} />
        </Link>
        <Link href={"/"} shallow>
          <BiLogoYoutube size={45} />
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center text-darkbl mt-[10px] uppercase">
        ADDRESS
      </h1>
      <h2 className="text-2xl mt-[10px]">Trip Yaatra</h2>
      <h3 className="text-[20px]  mt-[10px] md:text-[18px] sm:text-[15px]">
        385, Lane number 8 , Ramnagar, Roorkee, 247667. , Roorkee , Uttarakhand
        - 247667
      </h3>

      <div className="mt-[50px] flex flex-row gap-20 sm:gap-14 xs:gap-8 xs:text-[8px] ">
        <Link href={"/about"} shallow className="text-lg font-semibold">
          hello@test.in
        </Link>
        <Link href={"/about"} shallow className="text-lg font-semibold">
          +91-8887756502
        </Link>
        <Link href={"/about"} shallow className="text-lg font-semibold">
          www.test.in
        </Link>
      </div>
    </div>
  );
};

export default LowerFooter;
