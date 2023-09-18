import Hero from "@components/Hero";
import Feature from "@components/Feature";
import Packages from "@components/Packages";
import Review from "@components/Review";
import Secreats from "@components/Secret";
import Lookingimg from "@components/Looking"
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
