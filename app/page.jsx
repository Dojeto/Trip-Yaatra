import Image from "next/image";
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Feature from "@components/Feature";
import Packages from "@components/Packages";
export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />
      <Hero />
      <div>
        <Feature />
      </div>
      <div>
        <Packages />
      </div>
    </main>
  );
}
