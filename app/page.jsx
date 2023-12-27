// "use client";
// import useSWR from "swr";
import Hero from "@app/pages/Home/Hero";
import Feature from "@app/pages/Home/Feature";
import Packages from "@app/pages/Home/Packages";
import Review from "@components/Review";
import Secrets from "@components/Secret";
import Looking from "./pages/Home/Connect";
import Faq from "@components/FAQ";
import Form from "@components/Form";
import FeaturedBanner from "@components/FeaturedBanner";
import tripsData from "@json/trips.json";

export default function Home() {
  return (
    <main className=" flex flex-col gap-y-9">
      <Hero />
      <Feature />
      <Packages data={tripsData} />
      <Looking />
      <Secrets />
      <FeaturedBanner
        image="/assets/Home/bhutan_desktop.jpg"
        link="/international-trips/bhutan"
      />
      <Review />
      <Faq />
      <Form />
    </main>
  );
}
