import SectionHeader from "../../components/SectionHeader";
import Section from "../../components/Section";
import CONTACT_CONSTANTS from "./CONTACT_CONSTANTS";
import { styled } from "@mui/material";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";
import COLORS from "../../assets/Colors";
import SPACING from "../../assets/Spacing";
import SectionContent from "../../components/SectionContent";
import useMobileScreen from "../../utils/useMobileScreen";
import FadeIn from "../../components/FadeIn";

const {
  header,
  companyName,
  streetAddress,
  cityStateZip,
  phoneNumber,
  emailAddress,
} = CONTACT_CONSTANTS;

const ContactSection = ({ id }: { id: string }) => {
  const isMobileScreen = useMobileScreen();

  return (
    <Section id={id}>
      <SectionContent
        style={{
          maxWidth: isMobileScreen ? "100%" : "50%",
        }}
      >
        <FadeIn>
          <SectionHeader>{header}</SectionHeader>
        </FadeIn>
        <FadeIn delay={100}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5437.74761689968!2d-122.90533928807544!3d47.04270697102339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5491751cec7bde67%3A0xc575943384d981c1!2sTovani%20Hart!5e0!3m2!1sen!2sus!4v1741628518372!5m2!1sen!2sus"
            style={{ width: "100%", height: "350px", border: "0px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tovani Hart Map"
          ></iframe>

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
        </FadeIn>
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
