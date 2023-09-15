const TripsCard = (props) => {
  const { imageUrl, title } = props;
  return (
    <div className="p-3 relative">
      <div
        className="relative bg-cover bg-center w-32 h-44 group hover:brightness-75"
        style={{
          backgroundImage: `linear-gradient(rgba(80, 80, 80, 0.1) 67.4%, rgb(0, 0, 0) 90.97%), url("${imageUrl}")`,
        }}
      >
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center h-full">
          <div className="">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TripsCard;