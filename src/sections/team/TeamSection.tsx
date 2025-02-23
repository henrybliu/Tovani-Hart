import SectionHeader from "../../components/SectionHeader";
// import EmployeePage from "./EmployeePage";
import TEAM_CONSTANTS from "./TEAM_CONSTANTS";
import Section from "../../components/Section";
import SectionContent from "../../components/SectionContent";

const { backgroundImage, header } = TEAM_CONSTANTS;

const TeamSection = () => {
  return (
    <Section>
      <SectionContent>
        <SectionHeader>{header}</SectionHeader>
        {/* {TEAM_TEXT.map((employee, index) => {
        return <EmployeePage key={index} employee={employee} />;
      })} */}
      </SectionContent>
    </Section>
  );
};

export default TeamSection;
