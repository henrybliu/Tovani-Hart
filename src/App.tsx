import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import { PROJECTS_INFO } from "./sections/projects/PROJECTS_CONSTANTS";
import createRoute from "./utils/createRoute";
import ProjectPage from "./sections/projects/projectPage/ProjectPage";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = COLORS.navy;
    document.body.style.color = COLORS.white;
    document.body.style.fontFamily = "CustomFont, Lato";
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <HomeSection id="home" />
              <ProjectsSection id="projects" />
              <ServicesSection id="services" />
              <ApproachSection id="approach" />
              <TeamSection id="team" />
              <ContactSection id="contact" />
            </>
          }
        />
        {PROJECTS_INFO.map((project) => {
          const projectName = project.name;
          const projectRoute = createRoute(projectName);
          return (
            <Route
              key={projectName}
              path={`/${projectRoute}`}
              element={<ProjectPage {...project} />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}
export default App;
