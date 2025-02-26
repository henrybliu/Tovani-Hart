import SectionHeader from "../../components/SectionHeader";
import TEAM_CONSTANTS from "./TEAM_CONSTANTS";
import Section from "../../components/Section";
import SectionContent from "../../components/SectionContent";
// import { styled } from "@mui/material";
import ParallaxImage from "../../components/ParallaxImage";
import useMobileScreen from "../../utils/useMobileScreen";

const { backgroundImage, header } = TEAM_CONSTANTS;

const TeamSection = ({ id }: { id: string }) => {
  return (
    <Section id={id}>
      <ParallaxImage imageName={backgroundImage} />

      <TeamContent />

      {/* {TEAM_TEXT.map((employee, index) => {
        return <EmployeePage key={index} employee={employee} />;
      })} */}
    </Section>
  );
};

const TeamContent = () => {
  const isMobileScreen = useMobileScreen();

  return (
    <SectionContent
      style={{
        maxWidth: isMobileScreen ? "100%" : "",
        zIndex: 5,
        position: "absolute",
        top: 0,
      }}
    >
      <SectionHeader>{header}</SectionHeader>
    </SectionContent>
  );
};

// const Container = styled("div")({
//   height: "20px",
// });

export default TeamSection;
