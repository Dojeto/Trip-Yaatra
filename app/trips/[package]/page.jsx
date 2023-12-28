import Hero from "@app/pages/Packages/Hero";
import Details from "@app/pages/Packages/Details";
// import useSWR from "swr";
import data from "@json/trips.json";
// const fetcher = (url) => fetch(url).then((res) => res.json());

const page = ({ params }) => {
  // const { data, error, isLoading } = useSWR(`/api/trips`, fetcher);
  // if (!isLoading && !error) {
  //   console.log(data);  
  // }
  const filterObject = (obj, keysToKeep) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => keysToKeep.includes(key))
    );
  };
  const keysToKeep = data[params.package].similartrips;
  const filteredObject = filterObject(data, keysToKeep);
  const valuesArray = Object.values(filteredObject);
  // if (error) return <div>failed to load</div>;
  // if (isLoading)
  //   return (
  //     <div className="h-screen">
  //       {" "}
  //       <div className="fixed top-32 left-0 w-full h-full flex items-center justify-center bg-white z-50">
  //         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
  //       </div>
  //     </div>
  //   );
  // console.log(params.package);
  return (
    <>
      <Hero
        imageUrl={data[params.package].imageUrl}
        title={data[params.package].title}
        tag={data[params.package].tagline}
        content=""
        name={data.name}
      />
      <Details
        duration={data[params.package].duration}
        price={data[params.package].price}
        pickdrop={data[params.package].pickanddrop}
        about={data[params.package].about}
        notes={data[params.package].notes}
        photos={data[params.package].photos}
        videos={data[params.package].videos}
        ytvideo={data[params.package].ytvideo}
        similartrips = {valuesArray}
      />
    </>
  );
};

export default page;
