import { AiOutlineCalendar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
const TripsCard = (props) => {
  const { imageUrl, title } = props;
  return (
    <div className="p-3 relative hover:scale-105 transform transition-transform duration-300">
      <div
        className="relative bg-cover bg-center w-60 h-80 rounded-lg shadow-md shadow-black "
        style={{
          backgroundImage: `linear-gradient(rgba(80, 80, 80, 0.1) 0%, rgb(0, 0, 0) 150%),url("${imageUrl}")`,
        }}
      >
        <div className=" p-3">
          <div className=" p-3 absolute bottom-7 text-white font-bold">
            <div className="">{title}</div>
          </div>
          <div className=" p-3 absolute bottom-1 text-white font-semibold flex items-center gap-3">
            <div className=" flex items-center">
              <BiRupee />
              32,999/-
            </div>
            <div>
              <AiOutlineCalendar size={20} className=" text-darkvl" />
            </div>
            <div className=" text-sm">7N-8D</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsCard;
