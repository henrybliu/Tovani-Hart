import { useEffect } from "react";
import Page from "../../../components/Section";
import { styled } from "@mui/system";
import {
  ProjectPageTop,
  // ProjectPageBottom,
} from "../projectPage/ProjectPageNavBars";
import SPACING from "../../../assets/Spacing";
import TYPOGRAPHY from "../../../assets/Typography";
import formatDescription from "../../../utils/formatDescription";
import useMobileScreen from "../../../utils/useMobileScreen";
import { isImageFile, isVideoFile } from "../../../utils/fileType";
import COLORS from "../../../assets/Colors";
import FadeIn from "../../../components/FadeIn";

type ProjectPageProps = {
  name: string;
  location: string;
  description: string;
  media: string[];
};

const ProjectPage = ({
  name,
  location,
  description,
  media,
}: ProjectPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page>
      <PageContainer>
        <ProjectPageTop />
        <ProjectContent
          name={name}
          location={location}
          description={description}
          media={media}
        />
        {/* <ProjectPageBottom /> */}
      </PageContainer>
    </Page>
  );
};

const PageContainer = styled("div")({
  width: `calc(100vw - 2 * ${SPACING.default}%)`,
  marginLeft: `${SPACING.default}%`,
  marginRight: `${SPACING.default}%`,
  paddingBottom: `${SPACING.extraLarge}px`,
  lineHeight: 1.4,
});

const ProjectContent = ({
  name,
  location,
  description,
  media,
}: ProjectPageProps) => {
  const isMobileScreen = useMobileScreen();

  return (
    <ProjectContentContainer isMobileLayout={isMobileScreen}>
      <ProjectInfoContainer isMobileLayout={isMobileScreen}>
        <FadeIn>
          <Title>{name}</Title>
        </FadeIn>
        <FadeIn delay={100}>
          <Location>{location}</Location>
        </FadeIn>
        <FadeIn delay={200}>
          <Description> {formatDescription(description)}</Description>
        </FadeIn>
      </ProjectInfoContainer>
      <FadeIn
        slideIn={false}
        style={{
          width: isMobileScreen ? "100%" : "55%",
        }}
        delay={isMobileScreen ? 300 : 0}
      >
        <ProjectImagesContainer isMobileLayout={isMobileScreen}>
          {media.map((medium, index) => (
            <Medium
              key={index}
              medium={medium}
              isMobileScreen={isMobileScreen}
              style={{
                marginBottom:
                  index !== media.length - 1 ? `${SPACING.default}px` : "0px",
              }}
            />
          ))}
        </ProjectImagesContainer>
      </FadeIn>
    </ProjectContentContainer>
  );
};

type MediumProps = {
  medium: string;
  style?: React.CSSProperties;
  isMobileScreen: boolean;
};
const Medium = ({ medium, style, isMobileScreen }: MediumProps) => {
  if (isImageFile(medium)) {
    const image = require(`../../../assets/images/${medium}`);

    return (
      <img
        src={image}
        alt="project"
        style={{
          width: "100%",
          height: "auto",
          marginTop: `${SPACING.default}px`,
          ...style,
        }}
      />
    );
  } else if (isVideoFile(medium)) {
    const video = require(`../../../assets/images/${medium}`);

    return (
      <video
        src={video}
        style={{
          width: "100%",
          height: "auto",
          marginTop: `${SPACING.default}px`,
          ...style,
          backgroundColor: COLORS.black,
        }}
        controls
        loop
        muted
        autoPlay={!isMobileScreen}
      />
    );
  } else {
    const videoURL = medium;

    return (
      <iframe
        src={videoURL}
        style={{
          width: "100%",
          height: "auto",
          minHeight: "350px",
          marginTop: `${SPACING.default}px`,
          ...style,
        }}
        title="Project Video"
      />
    );
  }
};

const ProjectContentContainer = styled("div")(
  ({ isMobileLayout }: { isMobileLayout: boolean }) => ({
    width: "100%",
    display: "flex",
    flexDirection: isMobileLayout ? "column" : "row",
    padding: `${SPACING.default}px 0px`,
    marginBottom: `${SPACING.default}px `,
  })
);

const ProjectInfoContainer = styled("div")(
  ({ isMobileLayout }: { isMobileLayout: boolean }) => ({
    display: "flex",
    flexDirection: "column",
    width: isMobileLayout ? "100%" : "45%",
    paddingRight: isMobileLayout ? "0px" : `${6 * SPACING.default}px`,
    boxSizing: "border-box",
  })
);

const Title = styled("p")({
  fontSize: TYPOGRAPHY.fontSize.h2,
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
  marginTop: "0px",
  marginBottom: `${SPACING.default}px `,
});

const Location = styled("p")({
  fontSize: TYPOGRAPHY.fontSize.h4,
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
  margin: `${SPACING.default}px 0px`,
});

const Description = styled("div")({
  margin: `${SPACING.default}px 0px`,
});

const ProjectImagesContainer = styled("div")(
  ({ isMobileLayout }: { isMobileLayout: boolean }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: isMobileLayout ? `${SPACING.default}px` : "0px",
  })
);

export default ProjectPage;
