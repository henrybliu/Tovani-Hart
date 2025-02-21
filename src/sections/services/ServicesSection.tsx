import SectionHeader from "../../components/SectionHeader";
import Page from "../../components/Section";
import SERVICES_CONSTANTS from "./SERVICES_CONSTANTS";

const ServicesSection = () => {
  return (
    <Page>
      <SectionHeader>{SERVICES_CONSTANTS.header}</SectionHeader>
    </Page>
  );
};

export default ServicesSection;
