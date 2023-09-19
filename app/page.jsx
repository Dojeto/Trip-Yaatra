import Hero from "@app/pages/Home/Hero";
import Feature from "@app/pages/Home/Feature";
import Packages from "@app/pages/Home/Packages";
import Review from "@app/pages/Home/Review";
import Secreats from "@app/pages/Home/Secret";
import Lookingimg from "@app/pages/Home/Looking";
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
    </main>
  );
}
