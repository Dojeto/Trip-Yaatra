"use client";
import useSWR from "swr";
import PackageHero from "@app/pages/Tours/Hero";
import ReadMoreContent from "@app/pages/Tours/ReadMoreContent";
import BestSeller from "@app/pages/Tours/BestSeller";
import Secrets from "@components/Secret";
import Packages from "@app/pages/Tours/Packages";
import Review from "@components/Review";
import FAQ from "@components/FAQ";
import Form from "@components/Form";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Trips = ({ params }) => {
  const { data, error, isLoading } = useSWR(`/api/${params.info}`, fetcher);
  const { data: alldata, error: checkError, isLoading: Loading } = useSWR(`/api/trips`, fetcher);
  if (error || checkError) return <div>failed to load</div>;
  if (isLoading || Loading)
    return (
      <div className="h-screen">
        {" "}
        <div className="fixed top-32 left-0 w-full h-full flex items-center justify-center bg-white z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      </div>
    );
  return (
    <>
      <PackageHero
        imageUrl={data.imagePath}
        title={data.title}
        content=""
        name={data.name}
      />
      <ReadMoreContent />
      <BestSeller data={data} />
      <Packages data={alldata} />
      <Secrets />
      <Review />
      <FAQ />
      <Form />
    </>
  );
};

export default Trips;
