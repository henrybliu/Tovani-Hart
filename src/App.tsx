import ApproachSection from "./sections/approach/ApproachSection";
import ContactSection from "./sections/contact/ContactSection";
import HomeSection from "./sections/home/HomeSection";
import ProjectsSection from "./sections/projects/ProjectsSection";
import ServicesSection from "./sections/services/ServicesSection";
import TeamSection from "./sections/team/TeamSection";
import COLORS from "./assets/Colors";
import TYPOGRAPHY from "./assets/Typography";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = COLORS.navy;
    document.body.style.color = COLORS.white;
    document.body.style.fontFamily = `${TYPOGRAPHY.fontFamily.default}, ${TYPOGRAPHY.fontFamily.fallback}`;
  }, []);

  return (
    <ParallaxProvider>
      <HomeSection />
      <ProjectsSection />
      <ServicesSection />
      <ApproachSection />
      <TeamSection />
      <ContactSection />
    </ParallaxProvider>
  );
}
export default App;
