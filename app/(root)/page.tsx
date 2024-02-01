import About from "@/components/About";
import FeaturedIn from "@/components/FeaturedIn";
import HeaderSection from "@/components/HeaderSection";
import NavBar from "@/components/NavBar";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <div className="max-w-[100vw]">
      <NavBar />
      <HeaderSection />
      <About />
      <Tokenomics />
      <FeaturedIn />
    </div>
  );
}
