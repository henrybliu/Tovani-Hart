import SectionHeader from "../../components/SectionHeader";
import Page from "../../components/Section";
import CONTACT_CONSTANTS from "./CONTACT_CONSTANTS";

const ContactSection = () => {
  return (
    <Page>
      <SectionHeader>{CONTACT_CONSTANTS.header}</SectionHeader>
    </Page>
  );
};

export default ContactSection;
