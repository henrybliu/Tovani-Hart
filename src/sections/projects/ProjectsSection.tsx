import SectionHeader from "../../components/SectionHeader";
import PROJECTS_CONSTANTS from "./PROJECTS_CONSTANTS";
import Section from "../../components/Section";
import SectionContent from "../../components/SectionContent";

const ProjectsSection = () => {
  return (
    <Section>
      <SectionContent>
        <SectionHeader>{PROJECTS_CONSTANTS.header}</SectionHeader>
        {/* {PROJECTS_TEXT.map((project, index) => {
        return <ProjectTile key={index} project={project} />;
      })} */}
      </SectionContent>
    </Section>
  );
};

export default ProjectsSection;
