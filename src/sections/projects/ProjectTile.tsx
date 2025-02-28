import { ProjectProps } from "./PROJECTS_CONSTANTS";

// TODO: adjust this to just be a project image
const ProjectTile = ({ project }: { project: ProjectProps }) => {
  const name = project.name;
  const location = project.location;
  const description = project.description;
  //   const coverImage = project.coverImage;
  //   const otherImages = project.otherImages;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default ProjectTile;
