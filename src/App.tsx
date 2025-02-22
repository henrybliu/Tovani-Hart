import ApproachSection from "./sections/approach/ApproachSection";
import ContactSection from "./sections/contact/ContactSection";
import HomeSection from "./sections/home/HomeSection";
import ProjectsSection from "./sections/projects/ProjectsSection";
import ServicesSection from "./sections/services/ServicesSection";
import TeamSection from "./sections/team/TeamSection";
import COLORS from "./assets/Colors";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = COLORS.navy;
    document.body.style.color = COLORS.white;
    document.body.style.fontFamily = "Host Grotesk, sans-serif";
  }, []);

  return (
    <>
      <HomeSection />
      <ProjectsSection />
      <ServicesSection />
      <ApproachSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
export default App;
