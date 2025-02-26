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
import Modal from "../../components/Modal";

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
      {showModal ? <PositionModal setShowModal={setShowModal} /> : null}
      <HomeContent setShowModal={setShowModal} />
    </Section>
  );
};

const PositionModal = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal setShowModal={setShowModal}>
      <div
        style={{
          fontSize: TYPOGRAPHY.fontSize.h4,
          fontWeight: TYPOGRAPHY.fontWeight.bolder,
        }}
      >
        {positionHiring}
      </div>
      <ul>
        {positionBulletPoints.map((bulletPoint) => (
          <li>{bulletPoint}</li>
        ))}
      </ul>

      <Paragraph>{positionAvailability}</Paragraph>
    </Modal>
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
        position: "absolute",
        zIndex: 5,
        height: isMobileScreen ? "100%" : "",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        top: isMobileScreen ? "60px" : "",
        bottom: isMobileScreen ? "" : "20%",
      }}
    >
      {isMobileScreen ? (
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
      ) : null}
      <SectionContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginBottom: isMobileScreen ? "0%" : "",
          maxWidth: isMobileScreen
            ? `calc(100% - ${2 * SPACING.default}%)`
            : "60%",
          height: "55%",
        }}
      >
        <SectionHeader
          style={{
            marginTop: isMobileScreen ? `${SPACING.default}px` : "",
          }}
        >
          {header}
        </SectionHeader>
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
});

const HiringLinkText = styled("div")({
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  textDecoration: "underline",
  marginRight: SPACING.small,
});

export default HomeSection;
