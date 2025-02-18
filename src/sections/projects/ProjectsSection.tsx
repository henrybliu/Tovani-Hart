import ProjectPage from "./ProjectPage";
import SectionHeader from "../../components/SectionHeader";
import PROJECTS_TEXT from "./PROJECTS_TEXT";

const ProjectsSection = () => {
  return (
    <div>
      <SectionHeader>Projects</SectionHeader>
      {PROJECTS_TEXT.map((project, index) => {
        return <ProjectPage key={index} project={project} />;
      })}
    </div>
  );
};

export default ProjectsSection;
