import ApproachSection from "./sections/approach/ApproachSecition";
import ContactSection from "./sections/contact/ContactSection";
import HomeSection from "./sections/home/HomeSection";
import ProjectsSection from "./sections/projects/ProjectsSection";
import ServicesSection from "./sections/services/ServicesSection";
import TeamSection from "./sections/team/TeamSection";

function App() {
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
