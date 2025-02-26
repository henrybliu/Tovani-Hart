import SectionHeader from "../../components/SectionHeader";
import Section from "../../components/Section";
import SERVICES_CONSTANTS from "./SERVICES_CONSTANTS";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";
import COLORS from "../../assets/Colors";
import { styled } from "@mui/material";
import SectionContent from "../../components/SectionContent";
import SPACING from "../../assets/Spacing";
import useMobileScreen from "../../utils/useMobileScreen";

const { backgroundImage, header, description, pillars } = SERVICES_CONSTANTS;

const ServicesSection = ({ id }: { id: string }) => {
  const isMobileScreen = useMobileScreen();

  return (
    <Section id={id}>
      <SectionContent style={{ maxWidth: isMobileScreen ? "100%" : "" }}>
        <SectionHeader>{header}</SectionHeader>
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
      </SectionContent>
    </Section>
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
