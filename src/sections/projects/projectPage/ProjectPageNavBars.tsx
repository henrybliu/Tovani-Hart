import {
  ProjectPageBackButton,
  ProjectPageBackToTopButton,
} from "./ProjectPageButton";
import { styled } from "@mui/material";
import SPACING from "../../../assets/Spacing";
import { LogoText } from "../../../components/Logo";
import useScreenWidth from "../../../utils/useScreenWidth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProjectPageTop = () => {
  const screenWidth = useScreenWidth();
  const [logoScale, setLogoScale] = useState(1);

  useEffect(() => {
    if (screenWidth <= 360) {
      setLogoScale(0.6);
    } else if (screenWidth <= 425) {
      setLogoScale(0.8);
    } else {
      setLogoScale(1);
    }
  }, [screenWidth]);

  return (
    <NavContainer isTopNavBar>
      <Logo logoScale={logoScale} />
      <ProjectPageBackButton />
    </NavContainer>
  );
};

const Logo = ({ logoScale }: { logoScale: number }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <LogoTextContainer onClick={handleBack}>
      <LogoText style={{ marginTop: "0px" }} scale={logoScale} />
    </LogoTextContainer>
  );
};

const LogoTextContainer = styled("div")({
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const ProjectPageBottom = () => {
  return (
    <NavContainer isTopNavBar={false}>
      <ProjectPageBackButton />
      <ProjectPageBackToTopButton />
    </NavContainer>
  );
};

const NavContainer = styled("div")(
  ({ isTopNavBar }: { isTopNavBar: boolean }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: isTopNavBar ? "1px solid grey" : "",
    borderTop: isTopNavBar ? "" : "1px solid grey",
    marginTop: isTopNavBar ? "0px" : `${SPACING.extraLarge}px`,
    marginBottom: isTopNavBar ? `${SPACING.extraLarge}px` : "0px",
    padding: `5px 0px`,
    height: "60px",
  })
);
