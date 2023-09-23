import Image from "next/image";
import Link from "next/link";

const LowerFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[80px] ">
      <div className="flex flex-row gap-11">
        <Image
          src="/assets/facebook-f.png"
          alt="lowerfooter"
          width={60}
          height={60}
          className=""
        />
        <Image
          src="/assets/instagram-f.png"
          alt="lowerfooter"
          width={60}
          height={60}
          className=""
        />
        <Image
          src="/assets/linkedin-f.png"
          alt="lowerfooter"
          width={60}
          height={60}
          className=""
        />
        <Image
          src="/assets/youtube-f.png"
          alt="lowerfooter"
          width={60}
          height={60}
          className=""
        />
      </div>
      <h1 className="text-3xl font-bold text-center text-darkbl mt-[10px] uppercase">
        ADDRESS
      </h1>
      <h2 className="text-2xl mt-[10px]">WANDERON EXPERIENCES PVT LTD</h2>
      <h3 className="text-[20px]  mt-[10px]">
        3rd Floor, Building No-436, Phase IV, Udyog Vihar, Sector-18, Gurugram,
        Haryana-122015
      </h3>

      <div className="mt-[50px] flex flex-row gap-20">
        <Link href="/about" className="text-lg font-semibold">
          hello@wanderon.in
        </Link>
        <Link href="/about" className="text-lg font-semibold">
          +91-8887756502
        </Link>
        <Link href="/about" className="text-lg font-semibold">
        www.wanderon.in
        </Link>
      </div>
    </div>
  );
};

export default LowerFooter;
