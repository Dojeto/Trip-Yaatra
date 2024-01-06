import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
const UpperFooter = () => {
  return (
    <footer className="mt-[80px] relative overflow-hidden">
      {/* <Image
        src="/assets/Home/desktop-footer.png"
        alt="upperfooter"
        width={1920}
        height={500}
        className="block w-full h-auto"
      /> */}
      <Image
        src="/assets/abstract-wavy.png"
        width={1920}
        height={288}
        className="absolute object-cover left-0 right-0 opacity-10  bottom-0 z-0 select-none pointer-events-none tblt:hidden"
      />
      <div className="bg-darkbl py-8 px-[9%] gap-20 h-full w-full flex justify-between items-stretch z-10 tblt:flex-col sm:gap-0">
        <div className="flex flex-col justify-start gap-4 items-center">
          <Image width={100} height={100} src="/assets/logo-white.png" />
          <div className="flex gap-7">
            {" "}
            <Link href={"/"} shallow>
              <BiLogoFacebookCircle size={45} color="white" />
            </Link>
            <Link href={"/"} shallow>
              <BiLogoInstagramAlt size={45} color="white" />
            </Link>
            <Link href={"/"} shallow>
              <BiLogoLinkedinSquare size={45} color="white" />
            </Link>
            <Link href={"/"} shallow>
              <BiLogoYoutube size={45} color="white" />
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-center text-white mt-[10px] uppercase">
            ADDRESS
          </h1>
          <div className="text-base text-center text-white">
            385, Lane number 8 , Ramnagar, Roorkee, 247667. , Roorkee ,
            Uttarakhand - 247667
          </div>
          <div className="text-lg flex gap-4 items-center font-bold text-white">
            <AiOutlineMail /> trip.yatra.uk17@gmail.com
          </div>
        </div>
        <div className="container mx-auto  text-white flex gap-5 justify-center xl:block ">
          <div className=" border-r border-white p-4 xl:border-none xl:flex xl:justify-center">
            <div className="w-60 h-full xl:w-full">
              <h1 className="text-xl font-bold xl:text-center">About Us</h1>
              <p className="text-sm leading-[126.19%] pt-3 xs:text-xs">
                At Trip Yaatra, we're a contemporary travel community dedicated
                to offering comprehensive travel packages across India and
                internationally. Our aim is to craft exceptional travel
                itineraries that foster group travel experiences for individuals
                with similar interests. Our array of services includes road
                trips, trekking expeditions, corporate excursions, and
                personalized tour packages. When you travel with us, expect a
                seamless experience with excellent accommodation, guided
                sightseeing, all within a budget-friendly package. Share your
                travel dates with us and get ready to embark on an unparalleled
                journey.
              </p>
            </div>
          </div>
          <div className=" flex gap-5 justify-start  xs:gap-1">
            <div className="border-r border-white p-5 md:border-none">
              <div className="">
                <h1 className="text-xl font-bold xs:text-sm">Weekend Trips</h1>
                <div className="flex flex-col pt-3 gap-2 text-sm xs:text-xs xs:pt-1">
                  <Link href={"/about"} shallow className="">
                    Bir Billing
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                </div>
                <h1 className="text-xl font-bold mt-[25px] xs:text-sm">
                  Weekend Trips
                </h1>
                <div className="flex flex-col pt-3 gap-2 text-sm xs:text-xs xs:pt-1">
                  <Link href={"/about"} shallow className="">
                    Bir Billing
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-r border-white p-5 md:border-none">
              <div className="">
                <h1 className="text-xl font-bold xs:text-sm">
                  Backpacking Trips
                </h1>
                <div className="flex flex-col pt-3 gap-2 text-sm xs:text-xs xs:pt-1">
                  <Link href={"/about"} shallow className="">
                    Bir Billing
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                </div>
                <h1 className="text-xl font-bold mt-[25px] xs:text-sm">
                  Blogs
                </h1>
                <div className="flex flex-col pt-3 gap-2 text-sm xs:text-xs xs:pt-1">
                  <Link href={"/about"} shallow className="">
                    Bir Billing
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Chopta Tungnath
                  </Link>
                </div>
              </div>
            </div>
            <div className=" border-white p-5 md:p-0">
              <div className="mt-[20px]">
                <h1 className="text-xl font-bold xs:text-sm">Quick Links</h1>
                <div className="flex flex-col pt-3 gap-2 text-sm xs:text-xs xs:pt-1">
                  <Link href={"/about"} shallow className="">
                    Privacy Policy
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Cancellation Policy
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Terms & Condition
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Disclaimer
                  </Link>
                  <Link href={"/about"} shallow className="">
                    Careers
                  </Link>
                  <Link href={"/about"} shallow className="">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* section */}
        </div>
      </div>
    </footer>
  );
};

export default UpperFooter;
