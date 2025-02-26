import SectionHeader from "../../components/SectionHeader";
import Section from "../../components/Section";
import CONTACT_CONSTANTS from "./CONTACT_CONSTANTS";
import { styled } from "@mui/material";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";
import COLORS from "../../assets/Colors";
import SPACING from "../../assets/Spacing";
import SectionContent from "../../components/SectionContent";
import useMobileScreen from "../../utils/useMobileScreen";

const {
  header,
  companyName,
  streetAddress,
  cityStateZip,
  phoneNumber,
  emailAddress,
  mapImage,
} = CONTACT_CONSTANTS;

const mapFilePath = require(`../../assets/images/${mapImage}`);

const ContactSection = ({ id }: { id: string }) => {
  const isMobileScreen = useMobileScreen();

  return (
    <Section id={id}>
      <SectionContent
        style={{
          maxWidth: isMobileScreen ? "100%" : "50%",
        }}
      >
        <SectionHeader>{header}</SectionHeader>
        <img
          src={mapFilePath}
          alt="map"
          style={{
            width: "100%",
          }}
        />

        <Paragraph>
          <Logo>{companyName}</Logo>
          {streetAddress} <br />
          {cityStateZip} <br />
          <a
            href={`tel:+${phoneNumber}`}
            style={{
              textDecoration: "none",
              color: COLORS.white,
              cursor: "pointer",
            }}
          >
            {phoneNumber}
          </a>
          <br />
          <a
            href={`mailto:${emailAddress}`}
            style={{ textDecoration: "none", color: COLORS.white }}
          >
            {emailAddress}
          </a>
        </Paragraph>
      </SectionContent>
    </Section>
  );
};

const Logo = styled("div")({
  fontSize: TYPOGRAPHY.fontSize.logo,
  textTransform: "uppercase",
  marginTop: `${SPACING.large}px`,
  marginBottom: "0px",
});

export default ContactSection;
