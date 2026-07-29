import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import GridShowcase from "@/components/GridShowcase";
import Footer from "@/components/Footer";
import ScrollMorphHero from "@/components/scroll-morph-hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <CurrentlyBuilding />
        <GridShowcase />
        {/* Scroll Morph Section */}
        {/* <ScrollMorphHero /> */}
      </main>
      <Footer />
    </>
  );
}
