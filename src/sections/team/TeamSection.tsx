import SectionHeader from "../../components/SectionHeader";
// import EmployeePage from "./EmployeePage";
import TEAM_CONSTANTS from "./TEAM_CONSTANTS";
import Page from "../../components/Section";

const TeamSection = () => {
  return (
    <Page>
      <SectionHeader>{TEAM_CONSTANTS.header}</SectionHeader>
      {/* {TEAM_TEXT.map((employee, index) => {
        return <EmployeePage key={index} employee={employee} />;
      })} */}
    </Page>
  );
};

export default TeamSection;
