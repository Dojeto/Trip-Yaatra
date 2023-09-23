import { HiLocationMarker } from "react-icons/hi";
const Feature = () => {
  return (
    <div className="container m-0 pt-8 px-36 flex flex-col gap-8">
      <div className="flex items-end justify-between flex-row text-center">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-2xl font-bold  text-darkvl">
            Visit Top Destination with us
          </span>
          <span className="text-l text-gray-600">Trending this Month</span>
        </div>
        <div className="text-l text-gray-600">View All</div>
      </div>
      <div className=" flex flex-row gap-8">
        <div className=" w-full flex flex-col gap-8">
          <div className=" h-[590px] first-letter relative">
            <img
              src="/assets/bg3.jpg"
              className="absolute rounded-xl inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="m-8 p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Dubai, UAE
            </div>
          </div>
          <div className="h-72 relative">
            <img
              src="/assets/bg3.jpg"
              className="absolute rounded-xl inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="m-8 p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Dubai, UAE
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col gap-8">
          <div className="h-72 relative">
            <img
              src="/assets/bg3.jpg"
              className="absolute rounded-xl inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="m-8 p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Dubai, UAE
            </div>
          </div>
          <div className=" h-[590px] first-letter relative">
            <img
              src="/assets/bg3.jpg"
              className="absolute rounded-xl inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="m-8 p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  absolute text-xl bottom-0 text-white border border-gray-100">
              <div className="inline pr-3">
                <HiLocationMarker className="inline" />
              </div>
              Dubai, UAE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
