import SectionHeader from "../../components/SectionHeader";
import Page from "../../components/Section";
import SERVICES_CONSTANTS from "./SERVICES_CONSTANTS";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";
import { styled } from "@mui/material";

const ServicesSection = () => {
  return (
    <Page>
      <SectionHeader>{SERVICES_CONSTANTS.header}</SectionHeader>
      <Paragraph>{SERVICES_CONSTANTS.description}</Paragraph>
      {SERVICES_CONSTANTS.pillars.map((text, index) => (
        <Pillar
          key={index}
          text={text}
          isLast={index === SERVICES_CONSTANTS.pillars.length - 1}
        />
      ))}
    </Page>
  );
};
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
  padding: "6px 6px 6px 12px",
  borderTop: "1px solid grey",
  borderBottom: isLast ? "1px solid grey" : "none",
}));

export default ServicesSection;
