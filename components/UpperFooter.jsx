import Image from "next/image";
import Link from "next/link";
const UpperFooter = () => {
  return (
    <div className="mt-[80px] relative">
      <Image
        src="/assets/Home/desktop-footer.png"
        alt="upperfooter"
        width={1920}
        height={500}
        className="block w-full h-auto"
      />

      {/* Section with background color */}
      <div className="bg-darkvl -mt-1 h-full">
        <div className="container mx-auto p-8 text-white grid grid-cols-4 gap-x-3">
          <div className="ml-[80px] mr-[5px] border-r border-white p-4">
            <div className="mt-[20px]">
              <h1 className="text-2xl font-bold ">About Us</h1>
              <p className="text-[14px] leading-[126.19%]">
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

          <div className="ml-[10px] mr-[5px] border-r border-white p-4">
            <div className="mt-[20px]">
              <h1 className="text-2xl font-bold">Weekend Trips</h1>
              <div className="flex flex-col">
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Bir Billing
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
              </div>
              <h1 className="text-2xl font-bold mt-[25px]">Weekend Trips</h1>
              <div className="flex flex-col">
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Bir Billing
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
              </div>
            </div>
          </div>

          <div className="ml-[10px] mr-[5px] border-r border-white p-4">
            <div className="mt-[20px]">
              <h1 className="text-2xl font-bold">Backpacking Trips</h1>
              <div className="flex flex-col">
              <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Bir Billing
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
              </div>
              <h1 className="text-2xl font-bold mt-[25px]">Blogs</h1>
              <div className="flex flex-col">
              <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Bir Billing
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Chopta Tungnath
                </Link>
              </div>
            </div>
          </div>

          <div className="ml-[10px] mr-[5px] p-4">
            <div className="mt-[20px]">
              <h1 className="text-2xl font-bold">Quick Links</h1>
              <div className="flex flex-col">
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Privacy Policy
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Cancellation Policy
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Terms & Condition
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Disclaimer
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  Careers
                </Link>
                <Link href={"/about"} shallow className="text-[13px] w-[130px]">
                  About Us
                </Link>
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
