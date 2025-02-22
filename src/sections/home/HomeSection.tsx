import SectionHeader from "../../components/SectionHeader";
import Section from "../../components/Section";
import HOME_CONSTANTS from "./HOME_CONSTANTS";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";
import { styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SPACING from "../../assets/Spacing";
import COLORS from "../../assets/Colors";
import ParallaxImage from "../../utils/ParallaxImage";
import SectionContent from "../../components/SectionContent";

const {
  backgroundImage,
  header,
  sendResumeText,
  emailAddress,
  sendResumeAnywayText,
  hiringText,
  positionHiring,
} = HOME_CONSTANTS;

const HomeSection = () => {
  return (
    <Section>
      <ParallaxImage imageName={backgroundImage} />
      <HomeContent />
    </Section>
  );
};

const HomeContent = () => {
  return (
    <SectionContent
      style={{
        position: "absolute",
        zIndex: 10,
        bottom: "20%",
        maxWidth: "none",
      }}
    >
      <SectionHeader>{header}</SectionHeader>
      <Paragraph>
        {sendResumeText}{" "}
        <a
          href={`mailto:${emailAddress}`}
          style={{ textDecoration: "none", color: COLORS.white }}
        >
          {emailAddress}
        </a>
      </Paragraph>
      <Paragraph>{sendResumeAnywayText}</Paragraph>
      <Paragraph style={{ padding: `${SPACING.large}px 0px` }}>
        {hiringText}
      </Paragraph>
      <HiringLink />
    </SectionContent>
  );
};

const HiringLink = () => {
  return (
    <HiringLinkContainer>
      <HiringLinkText>{positionHiring}</HiringLinkText>
      <FontAwesomeIcon icon={faArrowRight} />
    </HiringLinkContainer>
  );
};

const HiringLinkContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const HiringLinkText = styled("div")({
  fontWeight: 600,
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  textDecoration: "underline",
  "&:hover": {
    cursor: "pointer",
  },
  marginRight: SPACING.small,
});

export default HomeSection;
