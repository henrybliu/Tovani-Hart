import SectionHeader from "../../components/SectionHeader";
import Section from "../../components/Section";
import APPROACH_CONSTANTS from "./APPROACH_CONSTANTS";
import { styled } from "@mui/material";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";
import SectionContent from "../../components/SectionContent";
import SPACING from "../../assets/Spacing";
import useMobileScreen from "../../utils/useMobileScreen";

const {
  header,
  designProcessSubheader,
  designProcessDescription,
  sustainablePrinciplesDescription,
  sustainablePrinciplesSubheader,
} = APPROACH_CONSTANTS;

const ApproachSection = ({ id }: { id: string }) => {
  const isMobileScreen = useMobileScreen();

  return (
    <Section id={id}>
      <SectionContent style={{ maxWidth: isMobileScreen ? "100%" : "" }}>
        <SectionHeader>{header}</SectionHeader>
        <SubHeader style={{ marginTop: "0px" }}>
          {designProcessSubheader}
        </SubHeader>
        <Paragraph>{designProcessDescription}</Paragraph>
        <SubHeader>{sustainablePrinciplesSubheader}</SubHeader>
        <Paragraph>{sustainablePrinciplesDescription}</Paragraph>
      </SectionContent>
    </Section>
  );
};

const SubHeader = styled("div")({
  fontSize: TYPOGRAPHY.fontSize.h4,
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
  margin: `${SPACING.large}px 0px`,
});

export default ApproachSection;
