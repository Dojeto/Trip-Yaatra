"use client";
import Hero from "@app/pages/Home/Hero";
import Feature from "@app/pages/Home/Feature";
import Packages from "@app/pages/Home/Packages";
import Review from "@components/Review";
import Secrets from "@components/Secret";
import Looking from "./pages/Home/Connect";
import Faq from "@components/FAQ";
import Form from "@components/Form";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(`/api/trips`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="h-screen">
        {" "}
        <div className="fixed top-32 left-0 w-full h-full flex items-center justify-center bg-white z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      </div>
    );
  // console.log(params.package);
  return (
    <main>
      <Hero />
      <Feature />
      <Packages data={data} />
      <Review />
      <Looking />
      <Secrets />
      <Faq />
      <Form /> 
    </main>
  );
}
