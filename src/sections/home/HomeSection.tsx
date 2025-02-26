// import { useState, useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";
import Section from "../../components/Section";
import HOME_CONSTANTS from "./HOME_CONSTANTS";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";
import { styled } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import SPACING from "../../assets/Spacing";
import COLORS from "../../assets/Colors";
import ParallaxImage from "../../components/ParallaxImage";
import SectionContent from "../../components/SectionContent";
import Logo from "../../components/Logo";
import useMobileScreen from "../../utils/useMobileScreen";

const {
  backgroundImage,
  header,
  sendResumeText,
  emailAddress,
  sendResumeAnywayText,
  hiringText,
  positionHiring,
} = HOME_CONSTANTS;

const HomeSection = ({ id }: { id: string }) => {
  return (
    <Section id={id}>
      <ParallaxImage imageName={backgroundImage} />
      <HomeContent />
    </Section>
  );
};

const HomeContent = () => {
  const isMobileScreen = useMobileScreen();

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 5,
        height: isMobileScreen ? "100%" : "",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        top: isMobileScreen ? "60px" : "",
        bottom: isMobileScreen ? "" : "15%",
      }}
    >
      {isMobileScreen ? (
        <div
          style={{
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo style={{ marginBottom: "0px" }} />
        </div>
      ) : null}
      <SectionContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: isMobileScreen ? "15%" : "",
          maxWidth: isMobileScreen
            ? `calc(100% - ${2 * SPACING.default}%)`
            : "60%",
          height: "50%",
        }}
      >
        <SectionHeader
          style={{
            marginTop: isMobileScreen ? `${SPACING.large}px` : "",
          }}
        >
          {header}
        </SectionHeader>
        <Paragraph style={{ marginTop: "0px" }}>
          {sendResumeText}{" "}
          <a
            href={`mailto:${emailAddress}`}
            style={{ textDecoration: "none", color: COLORS.white }}
          >
            {emailAddress}
          </a>
          <br />
          {sendResumeAnywayText}
        </Paragraph>
        <Paragraph style={{ marginTop: "0px" }}>{hiringText}</Paragraph>
        <HiringLink />
      </SectionContent>
    </div>
  );
};

const HiringLink = () => {
  return (
    <HiringLinkContainer>
      <HiringLinkText>{positionHiring}</HiringLinkText>
      <EastIcon />
    </HiringLinkContainer>
  );
};

const HiringLinkContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const HiringLinkText = styled("div")({
  fontWeight: TYPOGRAPHY.fontWeight.bold,
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  textDecoration: "underline",
  "&:hover": {
    cursor: "pointer",
  },
  marginRight: SPACING.small,
});

export default HomeSection;
