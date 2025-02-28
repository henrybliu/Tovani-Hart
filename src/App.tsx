import NavBar from "./components/navBar/NavBar";
import ApproachSection from "./sections/approach/ApproachSection";
import ContactSection from "./sections/contact/ContactSection";
import HomeSection from "./sections/home/HomeSection";
import ProjectsSection from "./sections/projects/ProjectsSection";
import ServicesSection from "./sections/services/ServicesSection";
import TeamSection from "./sections/team/TeamSection";
import COLORS from "./assets/Colors";
import { useEffect } from "react";
import "./assets/fonts/font.css";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = COLORS.navy;
    document.body.style.color = COLORS.white;
    document.body.style.fontFamily = "CustomFont, Lato";
  }, []);

  // TODO: routing for the different project pages
  return (
    <>
      <NavBar />
      <HomeSection id="home" />
      <ProjectsSection id="projects" />
      <ServicesSection id="services" />
      <ApproachSection id="approach" />
      <TeamSection id="team" />
      <ContactSection id="contact" />
    </>
  );
}
export default App;
