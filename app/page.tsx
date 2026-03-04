

import HeroSlide from "@/components/slides/Hero/hero";
import Vision from "@/components/slides/Vision/Vision";
import Services from "@/components/slides/Services/Services";
import TechStack from "@/components/slides/TechStack/TechStack";
import Approach from "@/components/slides/Approach/Approach";

export default function Home() {
  return (
      <>

  <HeroSlide/>
          <Vision/>
          <Services/>
          <TechStack/>
          <Approach/>
      </>
  );
}
