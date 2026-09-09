import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import WhatICanDo from "@/components/WhatICanDo";
import Skills from "@/components/Skills";
import { InfiniteSliderHorizontal } from "@/components/InfiniteSliderHorizontalDemo";
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
        <WhatICanDo />
        <Skills />
        {/* Scroll Morph Section */}
        {/* <ScrollMorphHero /> */}
        <InfiniteSliderHorizontal />
      </main>
      <Footer />
    </>
  );
}
