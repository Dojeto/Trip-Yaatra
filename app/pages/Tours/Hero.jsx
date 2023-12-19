import Modal from "@components/Modal";
const PackageHero = (props) => {
  const { imageUrl, name, content, title, about } = props;
  return (
    <div className="max-w-full h-screen">
      <div
        className="relative bg-cover bg-center h-full overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(80, 80, 80, 0.1) 0%, rgb(0, 0, 0) 150%),url("${imageUrl}")`,
        }}
      >
        <div className=" flex w-screen h-screen xs:flex  ">
          <div className=" w-1/2 h-screen flex justify-center items-center xs:h-[50%] xs:mx-[30px]">
            <div className="w-3/5 h-1/3">
              <h2
                style={{
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                className="text-white text-6xl font-black uppercase tracking-wide "
              >
                {name}
              </h2>
              <h2 className=" p-1 text-white text-md font-semibold tracking-wide">
                {title}
              </h2>
              <a href="#packages-section">
                <button className="mt-2 mr-3 border-2 rounded-md w-36 h-11 text-white md:mb-3">
                  View Packages
                </button>
              </a>

              <Modal />
            </div>
          </div>

          <div className="w-1/2 flex justify-center items-end md:h-[80%]  xs:invisible">
            <div className=" h-1/2 w-1/2 ">
              <h2 className=" text-white text-2xl font-black tracking-wide  ">
                About {name} Tours
              </h2>
              <h2 className=" pt-2 text-white text-sm line-clamp-4">{about}</h2>
              <h2 className="pt-2 text-white text-sm font-black tracking-wide cursor-pointer ">
                Read More....
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageHero;
