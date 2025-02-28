import TYPOGRAPHY from "../../../assets/Typography";
import { styled } from "@mui/material";
import SPACING from "../../../assets/Spacing";

type EmployeeTileProps = {
  name: string;
  image: string;
  title: string;
  tileSize: number;
  onClick: () => void;
};

const EmployeeTile = ({
  name,
  image,
  title,
  tileSize,
  onClick,
}: EmployeeTileProps) => {
  const coverImage = require(`../../../assets/images/${image}`);
  return (
    <TileContainer onClick={onClick}>
      <img
        src={coverImage}
        alt="portrait"
        style={{ height: `${tileSize}px`, width: `${tileSize}px` }}
      />

      <Name>{name}</Name>
      <Title>{title}</Title>
    </TileContainer>
  );
};

const TileContainer = styled("div")({
  filter: "grayscale(100%)",
  transition: "filter 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    filter: "grayscale(0%)",
  },
  "&:active": {
    filter: "grayscale(0%)",
  },
});

const Name = styled("p")({
  fontSize: `${TYPOGRAPHY.fontSize.h4}`,
  marginTop: `${SPACING.default}px`,
  marginBottom: "0px",
});

const Title = styled("p")({
  fontSize: `${TYPOGRAPHY.fontSize.note}`,
  margin: "0px",
});

export default EmployeeTile;
