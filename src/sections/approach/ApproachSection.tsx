import SectionHeader from "../../components/SectionHeader";
import Page from "../../components/Section";
import APPROACH_CONSTANTS from "./APPROACH_CONSTANTS";
import { styled } from "@mui/material";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";

const ApproachSection = () => {
  return (
    <Page>
      <SectionHeader>{APPROACH_CONSTANTS.header}</SectionHeader>
      <SubHeader>{APPROACH_CONSTANTS.designProcessSubheader}</SubHeader>
      <Paragraph>{APPROACH_CONSTANTS.designProcessDescription}</Paragraph>
      <SubHeader>{APPROACH_CONSTANTS.sustainablePrinciplesSubheader}</SubHeader>
      <Paragraph>
        {APPROACH_CONSTANTS.sustainablePrinciplesDescription}
      </Paragraph>
    </Page>
  );
};

const SubHeader = styled("div")({
  fontSize: TYPOGRAPHY.fontSize.h4,
  fontWeight: "bold",
});

export default ApproachSection;
