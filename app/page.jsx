import Hero from "@app/pages/Home/Hero";
import Feature from "@app/pages/Home/Feature";
import Packages from "@app/pages/Home/Packages";
import Review from "@components/Review";
import Secrets from "@components/Secret";
import Looking from "./pages/Home/Connect";
import Faq from "@components/FAQ";
import Form from "@components/Form";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Feature />
      <Packages />
      <Review />
      <Looking />
      <Secrets />
      <Faq />
      <Form /> */}
    </main>
  );
}
