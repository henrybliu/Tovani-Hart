import SectionHeader from "../../components/SectionHeader";
import Page from "../../components/Section";
import CONTACT_CONSTANTS from "./CONTACT_CONSTANTS";
import { styled } from "@mui/material";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";

const ContactSection = () => {
  return (
    <Page>
      <SectionHeader>{CONTACT_CONSTANTS.header}</SectionHeader>
      <Logo>{CONTACT_CONSTANTS.companyName}</Logo>
      <Paragraph>{CONTACT_CONSTANTS.streetAddress}</Paragraph>
      <Paragraph>{CONTACT_CONSTANTS.cityStateZip}</Paragraph>
      <Paragraph>{CONTACT_CONSTANTS.phoneNumber}</Paragraph>
      <Paragraph>{CONTACT_CONSTANTS.emailAddress}</Paragraph>
    </Page>
  );
};

const Logo = styled("div")({
  fontSize: TYPOGRAPHY.fontSize.logo,
  textTransform: "uppercase",
  fontWeight: 100,
});

export default ContactSection;
