import Image from "next/image";
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Feature from "@components/Feature";
export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />
      <Hero />
      <Feature />
    </main>
  );
}
