import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
const UpperFooter = () => {
  return (
    <div className="mt-[80px] relative">
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
        className="absolute object-cover left-0 right-0 opacity-10  top-0 z-0 select-none pointer-events-none"
      />
      <div className="bg-darkbl p-8 px-[9%] gap-20 h-full w-full flex justify-between items-stretch z-10">
        <div className="flex flex-col justify-between items-center">
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
        </div>
        <div className="container mx-auto  text-white flex gap-5 justify-center md:block ">
          <div className=" border-r border-white p-4 md:border-none md:flex md:justify-center">
            <div className="w-60 h-full md:w-full">
              <h1 className="text-xl font-bold md:text-center">About Us</h1>
              <p className="text-sm leading-[126.19%] pt-3 xs:text-xs">
                We at Trip-Yaatra are a modern travel community that provides
                end to end travel packages in India and abroad. We design the
                best travel itineraries that encourage group traveling for
                like-minded people. Our services include road trips, trekking
                expeditions, corporate trips, and customized tour packages. On
                our trips, we ensure hassle-free traveling, top-notch
                accommodation and guided sightseeing that too in a budget that
                won't burn a hole in your pocket. Just give us your dates and be
                ready to experience traveling like never before.
              </p>
            </div>
          </div>
          <div className=" flex gap-5 justify-center xs:gap-1">
            <div className="border-r border-white p-5 md:border-none">
              <div className="">
                <h1 className="text-xl font-bold xs:text-sm">Weekend Trips</h1>
                <div className="flex flex-col pt-3 text-sm xs:text-xs xs:pt-1">
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
                <div className="flex flex-col pt-3 text-sm xs:text-xs xs:pt-1">
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
                <div className="flex flex-col pt-3 text-sm xs:text-xs xs:pt-1">
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
                <div className="flex flex-col pt-3 text-sm xs:text-xs xs:pt-1">
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
            <div className=" border-white p-5">
              <div className="mt-[20px]">
                <h1 className="text-xl font-bold xs:text-sm">Quick Links</h1>
                <div className="flex flex-col pt-3 text-sm xs:text-xs xs:pt-1">
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
    </div>
  );
};

export default UpperFooter;
