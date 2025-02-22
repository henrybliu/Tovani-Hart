import SectionHeader from "../../components/SectionHeader";
import Page from "../../components/Section";
import HOME_CONSTANTS from "./HOME_CONSTANTS";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";
import { styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SPACING from "../../assets/Spacing";

const image = require("../../assets/images/building.jpg");

const HomeSection = () => {
  return (
    <Page>
      <ParallaxBanner style={{ minWidth: "100vw", minHeight: "110vh" }}>
        <ParallaxBannerLayer speed={-50}>
          <img src={image} alt="background" loading="lazy" />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer>
          <HomeContent />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </Page>
  );
};

const HomeContent = () => {
  return (
    <>
      <SectionHeader>{HOME_CONSTANTS.header}</SectionHeader>
      <Paragraph>{HOME_CONSTANTS.sendResumeText}</Paragraph>
      <Paragraph>{HOME_CONSTANTS.sendResumeAnywayText}</Paragraph>
      <Paragraph>{HOME_CONSTANTS.hiringText}</Paragraph>
      <HiringLink />
    </>
  );
};

const HiringLink = () => {
  return (
    <HiringLinkContainer>
      <HiringLinkText>{HOME_CONSTANTS.positionHiring}</HiringLinkText>
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
  fontWeight: "bold",
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  textDecoration: "underline",
  "&:hover": {
    cursor: "pointer",
  },
  marginRight: SPACING.small,
});

export default HomeSection;
