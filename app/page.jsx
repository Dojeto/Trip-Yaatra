import Hero from "@app/pages/Home/Hero";
import Feature from "@app/pages/Home/Feature";
import Packages from "@app/pages/Home/Packages";
import Review from "@app/pages/Home/Review";
import Secreats from "@app/pages/Home/Secret";
import Lookingimg from "@app/pages/Home/Looking";
import Faq from "@app/pages/Home/FAQ";
import Form from "@app/pages/Home/Form";
import UpperFooter from "./pages/Home/UpperFooter";
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
