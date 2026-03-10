import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Other sections can go here */}
        <div style={{ minHeight: "100vh" }}></div> 
      </main>
    </>
  );
}
