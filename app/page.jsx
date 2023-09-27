import Hero from "@app/pages/Home/Hero";
import Feature from "@app/pages/Home/Feature";
import Packages from "@app/pages/Home/Packages";
import Review from "@components/Review";
import Secrets from "@components/Secret";
import Looking from "./pages/Home/Connect";
import Faq from "@components/FAQ";
import Form from "@components/Form";
import UpperFooter from "@components/UpperFooter";
import LowerFooter from "@components/LowerFooter";
export default function Home() {
  return (
    <main className="h-screen">
      <Hero />
      <Feature />
      <Packages />
      <Review />
      <Looking />
      <Secrets />
      <Faq />
      <Form />
      <UpperFooter />
      <LowerFooter />
    </main>
  );
}
