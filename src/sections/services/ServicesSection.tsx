import SectionHeader from "../../components/SectionHeader";
import Section from "../../components/Section";
import SERVICES_CONSTANTS from "./SERVICES_CONSTANTS";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";
import COLORS from "../../assets/Colors";
import { styled } from "@mui/material";
import SectionContent from "../../components/SectionContent";
import SPACING from "../../assets/Spacing";
import useMobileScreen from "../../utils/useMobileScreen";
import ParallaxImage from "../../components/ParallaxImage";
import FadeIn from "../../components/FadeIn";

const { backgroundImage, header, description, pillars } = SERVICES_CONSTANTS;

const ServicesSection = ({ id }: { id: string }) => {
  return (
    <Section id={id}>
      <ParallaxImage imageName={backgroundImage} />
      <ServicesContent />
    </Section>
  );
};

const ServicesContent = () => {
  const isMobileScreen = useMobileScreen();

  return (
    <SectionContent
      style={{
        maxWidth: isMobileScreen ? "100%" : "",
        zIndex: 5,
        position: "relative",
        top: 0,
      }}
    >
      <FadeIn>
        <SectionHeader>{header}</SectionHeader>
      </FadeIn>
      <FadeIn delay={100}>
        <Paragraph>{description}</Paragraph>
        <PillarsContainer>
          {pillars.map((text, index) => (
            <Pillar
              key={index}
              text={text}
              isLast={index === pillars.length - 1}
            />
          ))}
        </PillarsContainer>
      </FadeIn>
    </SectionContent>
  );
};

const PillarsContainer = styled("div")({
  marginTop: `${SPACING.large}px`,
});

type PillarProps = {
  text: string;
  isLast: boolean;
};

const Pillar = ({ text, isLast }: PillarProps) => {
  return <PillarText isLast={isLast}>{text}</PillarText>;
};

const PillarText = styled("div")<{ isLast: boolean }>(({ isLast }) => ({
  fontSize: TYPOGRAPHY.fontSize.h3,
  textTransform: "capitalize",
  padding: "10px 12px 10px 12px",
  borderTop: "1px solid grey",
  borderBottom: isLast ? "1px solid grey" : "none",
  backgroundColor: `${COLORS.transparentNavy1}`,
}));

export default ServicesSection;
