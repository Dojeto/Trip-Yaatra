import Hero from "@components/Home/Hero";
import Feature from "@components/Home/Feature";
import Packages from "@components/Home/Packages";
import Review from "@components/Home/Review";
import Secreats from "@components/Home/Secret";
import Lookingimg from "@components/Home/Looking";
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
