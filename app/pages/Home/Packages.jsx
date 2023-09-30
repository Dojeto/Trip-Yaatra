import Link from "next/link";
import PackageCard from "@components/PackageCard";
import data from "@json/trips.json";

const Packages = (props) => {
  // const { data, error, isLoading } = useSWR(`/api/trips`, fetcher);
  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  // console.log(data);
  return (
    <div className="mt-[50px] mx-[10%] flex flex-col gap-8">
      <div className="flex items-end justify-between flex-row text-center">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-2xl font-bold  text-darkbl">
            Elevate Your Experience with Our Package
          </span>
          <span className="text-l text-gray-600">Trending this Month</span>
        </div>
        <Link href="#" className="text-l text-gray-600 pointer-link">
          View All
        </Link>
      </div>
      <div className=" grid grid-cols-3 gap-x-3">
        {Object.entries(data).map((entry, i) => {
          let key = entry[0];
          let trip = entry[1];
          return trip["trending"] ? (
            <>
              {" "}
              <PackageCard
                key={i}
                imageUrl={trip["imageUrl"]}
                price={trip["price"]}
                title={trip["title"]}
                date={trip["date"]}
                days={trip["duration"]}
                destination={trip["destination"]}
                link={"/trips/" + key}
              />
            </>
          ) : (
            <></>
          );
        })}
      </div>
      {/* <PackageCard
        imageUrl="/assets/leh.png"
        price="Price"
        title="Title"
        date="Date"
        days="Days"
        destination="Destination"
        link="/"
      /> */}
    </div>
  );
};

export default Packages;
