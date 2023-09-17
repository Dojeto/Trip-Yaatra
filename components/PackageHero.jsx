const PackageHero = (props) => {
  const {imageUrl,name,content,title} = props;
  return (
    <div className=" h-screen">
      <div
        className="relative bg-cover bg-center w-screen h-full overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(80, 80, 80, 0.1) 67.4%, rgb(0, 0, 0) 90.97%),url("${imageUrl}")`,
        }}
      >
        <div className=" flex w-screen h-screen">
          <div className=" w-1/2 h-screen flex justify-center items-center">
            <div className="w-3/5 h-1/3">
              <h2
                style={{
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                className="text-white text-6xl font-black uppercase"
              >
                {name}
              </h2>
              <h2 className=" p-1 text-white text-md font-semibold tracking-wide">
                {title}
              </h2>
              <button className=" mt-2 mr-3 border-2 rounded-md w-36 h-11 text-white">
                View Packages
              </button>
              <button className=" p-2 border-2 rounded-md w-36 h-11 text-white">
                Contact Us
              </button>
            </div>
          </div>

          <div className="   w-1/2 flex justify-center items-end">
            <div className=" h-1/2 w-1/2 ">
              <h2 className=" text-white text-2xl font-black tracking-wide">
                About India Tours
              </h2>
              <h2 className=" pt-2 text-white text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                assumenda molestias odit fuga iusto obcaecati numquam, esse
                voluptas. Quos maiores saepe unde possimus odit sit reiciendis
                doloremque enim eveniet necessitatibus.
              </h2>
              <h2 className="pt-2 text-white text-sm font-black tracking-wide cursor-pointer">
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
