import { styled } from "@mui/material";

type ProjectTileProps = {
  projectImage: string;
  tileSize: number;
  onClick: (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void;
};

const ProjectTile = ({ projectImage, tileSize, onClick }: ProjectTileProps) => {
  const tileImage = require(`../../assets/images/${projectImage}`);
  return (
    <TileContainer onClick={onClick}>
      <img
        src={tileImage}
        alt="project"
        style={{ height: `${tileSize}px`, width: `${tileSize}px` }}
      />
    </TileContainer>
  );
};

const TileContainer = styled("div")({
  filter: "grayscale(100%)",
  transition: "filter 0.3s ease-in-out, transform 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    filter: "grayscale(0%)",
    transform: "scale(1.05)",
  },
  "&:active": {
    filter: "grayscale(0%)",
    transform: "scale(1.05)",
  },
});

export default ProjectTile;
