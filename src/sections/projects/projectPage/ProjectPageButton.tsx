import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import NorthIcon from "@mui/icons-material/North";
import { styled } from "@mui/material";
import TYPOGRAPHY from "../../../assets/Typography";
import COLORS from "../../../assets/Colors";

type ProjectPageButtonProps = {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
};

const ProjectPageButton = ({ text, icon, onClick }: ProjectPageButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      {icon} &nbsp;
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled("div")({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "transform 0.3s ease-in-out",
  paddingRight: "3px",

  "&::after": {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "-2px",
    width: "0%",
    height: "2px",
    backgroundColor: COLORS.white,
    transition: "width 0.3s ease-in-out",
  },

  "&:hover": {
    transform: "scale(1.05)",
  },

  "&:hover::after": {
    width: "100%",
  },
});

const ButtonText = styled("div")({
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  color: COLORS.white,
});

export const ProjectPageBackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <ProjectPageButton
      text="Back to Projects"
      icon={<WestIcon />}
      onClick={handleBack}
    />
  );
};

export const ProjectPageBackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ProjectPageButton
      text="Back to Top"
      icon={<NorthIcon />}
      onClick={scrollToTop}
    />
  );
};
