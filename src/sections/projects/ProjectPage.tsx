import { ProjectProps } from "./PROJECTS_CONSTANTS";

const ProjectPage = ({ project }: { project: ProjectProps }) => {
  const name = project.name;
  const location = project.location;
  const description = project.description;
  //   const coverImage = project.coverImage;
  //   const otherImages = project.otherImages;

  // TODO: handle bullet points and paragraphs in the description
  // TODO: handle vimeo video links
  return (
    <div>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default ProjectPage;
