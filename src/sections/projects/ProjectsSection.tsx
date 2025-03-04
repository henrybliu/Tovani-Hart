import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import PROJECTS_CONSTANTS from "./PROJECTS_CONSTANTS";
import Section from "../../components/Section";
import SectionContent from "../../components/SectionContent";
import { styled } from "@mui/material";
import SPACING from "../../assets/Spacing";
import { PROJECTS_INFO } from "./PROJECTS_CONSTANTS";
import ProjectTile from "./ProjectTile";
import createRoute from "../../utils/createRoute";
import useScreenWidth from "../../utils/useScreenWidth";
import { MOBILE_NAVBAR_SCREEN_WIDTH } from "../../assets/Spacing";
import useMobileScreen from "../../utils/useMobileScreen";

const ProjectsSection = ({ id }: { id: string }) => {
  return (
    <Section id={id}>
      <ProjectsContent />
    </Section>
  );
};

const ProjectsContent = () => {
  // for navigating to a project page
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
    route: string
  ) => {
    if (event.metaKey || event.ctrlKey) {
      window.open(`${window.location.origin}/${route}`, "_blank");
    } else {
      navigate(`/${route}`);
    }
  };

  // grid sizing logic
  const screenWidth = useScreenWidth();
  const desktopMaxWidth = 70;
  const [maxWidth, setMaxWidth] = useState(desktopMaxWidth);
  const [tileSize, setTileSize] = useState(265);
  const isMobileScreen = useMobileScreen();

  useEffect(() => {
    if (screenWidth <= 375) {
      setMaxWidth(100);
      setTileSize(120);
    } else if (screenWidth <= 425) {
      setMaxWidth(100);
      setTileSize(155);
    } else if (screenWidth <= 500) {
      setMaxWidth(100);
      setTileSize(165);
    } else if (screenWidth <= 625) {
      setMaxWidth(100);
      setTileSize(200);
    } else if (screenWidth <= 768) {
      setMaxWidth(100);
      setTileSize(200);
    } else if (screenWidth <= MOBILE_NAVBAR_SCREEN_WIDTH) {
      setMaxWidth(100);
      setTileSize(210);
    } else if (screenWidth <= 1220) {
      setMaxWidth(60);
      setTileSize(190);
    } else if (screenWidth <= 1265) {
      setMaxWidth(60);
      setTileSize(215);
    } else if (screenWidth <= 1300) {
      setMaxWidth(60);
      setTileSize(240);
    } else {
      setMaxWidth(desktopMaxWidth);
      setTileSize(265);
    }
  }, [screenWidth]);

  return (
    <SectionContent
      style={{
        maxWidth: `${maxWidth}%`,
        position: "relative",
      }}
    >
      <SectionHeader>{PROJECTS_CONSTANTS.header}</SectionHeader>

      <ProjectsTileContainer
        tileSize={tileSize}
        isMobileScreen={isMobileScreen}
      >
        {PROJECTS_INFO.map((project, index) => {
          const projectName = project.name;
          const projectRoute = createRoute(projectName);
          const projectCoverImage = project.coverImage;
          return (
            <ProjectTile
              key={index}
              projectImage={projectCoverImage}
              tileSize={tileSize}
              onClick={(event) => handleClick(event, projectRoute)}
            />
          );
        })}
      </ProjectsTileContainer>
    </SectionContent>
  );
};

type ProjectsTileContainerProps = {
  tileSize: number;
  isMobileScreen: boolean;
};
const ProjectsTileContainer = styled("div")(
  ({ tileSize, isMobileScreen }: ProjectsTileContainerProps) => ({
    width: "100%",
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, ${tileSize}px)`,
    gap: `${2.5 * SPACING.default}px`,
    marginBottom: `${(isMobileScreen ? 5 : 10) * SPACING.default}px`,
    marginRight: `${(isMobileScreen ? 5 : 10) * SPACING.default}px`,
  })
);

export default ProjectsSection;
