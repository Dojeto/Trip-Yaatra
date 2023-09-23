import Hero from "@app/pages/Home/Hero";
import Feature from "@app/pages/Home/Feature";
import Packages from "@app/pages/Home/Packages";
import Review from "@components/Review";
import Secreats from "@components/Secret";
import Lookingimg from "@app/pages/Home/Looking";
import Faq from "@components/FAQ";
import Form from "@components/Form";
import UpperFooter from "../components/UpperFooter";
export default function Home() {
  return (
    <main className="h-screen">
      <Hero />
      <div>
        <Feature />
      </div>
      <div>
        <Packages />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <Lookingimg />
      </div>
      <div>
        <Secreats />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <UpperFooter />
      </div>
    </main>
  );
}
