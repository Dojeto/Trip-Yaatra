import Image from "next/image";
import Link from "next/link";
const UpperFooter = () => {
  return (
    <div className="mt-[80px]">
      <Image
        src="/assets/Home/desktop-footer.png"
        alt="upperfooter"
        width={1920}
        height={500}
        className="block w-full h-auto"
      />

      {/* Section with background color */}
      <div className="bg-darkvl -mt-1 h-full w-full">
        <div className="container mx-auto p-8 text-white flex gap-5 justify-center md:block ">
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
