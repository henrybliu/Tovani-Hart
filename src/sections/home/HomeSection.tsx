import { useState } from "react";
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
import HiringModal from "./HiringModal";
import FadeIn from "../../components/FadeIn";

const {
  backgroundImage,
  header,
  sendResumeText,
  emailAddress,
  sendResumeAnywayText,
  hiringText,
  positionHiring,
  positionBulletPoints,
  positionAvailability,
} = HOME_CONSTANTS;

const HomeSection = ({ id }: { id: string }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Section id={id}>
      <ParallaxImage imageName={backgroundImage} />
      {showModal && (
        <HiringModal
          positionHiring={positionHiring}
          positionBulletPoints={positionBulletPoints}
          positionAvailability={positionAvailability}
          setShowModal={setShowModal}
        />
      )}
      <HomeContent setShowModal={setShowModal} />
    </Section>
  );
};

const HomeContent = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const isMobileScreen = useMobileScreen();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        zIndex: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      {isMobileScreen && (
        <div
          style={{
            height: "45%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo style={{ marginBottom: "0px" }} />
        </div>
      )}
      <SectionContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          maxWidth: isMobileScreen
            ? `calc(100% - ${2 * SPACING.default}%)`
            : "60%",
          height: isMobileScreen ? "45%" : "55%",
        }}
      >
        <FadeIn>
          <SectionHeader
            style={{
              marginTop: isMobileScreen ? `${SPACING.default}px` : "",
            }}
          >
            {header}
          </SectionHeader>
        </FadeIn>
        <FadeIn delay={100}>
          <Paragraph>
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
          <Paragraph style={{ padding: `${SPACING.large}px 0px` }}>
            {hiringText}
          </Paragraph>
          <HiringLink setShowModal={setShowModal} />
        </FadeIn>
      </SectionContent>
    </div>
  );
};

const HiringLink = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <HiringLinkContainer
      onClick={() => {
        setShowModal((prev) => !prev);
      }}
    >
      <HiringLinkText>{positionHiring}</HiringLinkText>
      <EastIcon />
    </HiringLinkContainer>
  );
};

const HiringLinkContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
  width: "fit-content",
  transition: "transform 0.3s ease-in-out",
  paddingLeft: "3px",
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

const HiringLinkText = styled("div")({
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  marginRight: SPACING.small,
});

export default HomeSection;
