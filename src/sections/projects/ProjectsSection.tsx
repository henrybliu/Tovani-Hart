import SectionHeader from "../../components/SectionHeader";
import PROJECTS_CONSTANTS from "./PROJECTS_CONSTANTS";
import Page from "../../components/Section";

const ProjectsSection = () => {
  return (
    <Page>
      <SectionHeader>{PROJECTS_CONSTANTS.header}</SectionHeader>
      {/* {PROJECTS_TEXT.map((project, index) => {
        return <ProjectTile key={index} project={project} />;
      })} */}
    </Page>
  );
};

export default ProjectsSection;
