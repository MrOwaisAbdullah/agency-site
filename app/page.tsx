import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsTab from "@/components/ProjectsTab";
import Services from "@/components/Services";
import LogoSlider from "@/components/ui/LogoSlider";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoSlider />
      <About />
      <Services />
      <ProjectsTab />
      <Contact />
    </>
  );
}
