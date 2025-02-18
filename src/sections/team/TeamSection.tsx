import SectionHeader from "../../components/SectionHeader";
import EmployeePage from "./EmployeePage";
import TEAM_TEXT from "./TEAM_TEXT";

const TeamSection = () => {
  return (
    <div>
      <SectionHeader>Our team</SectionHeader>
      {TEAM_TEXT.map((employee, index) => {
        return <EmployeePage key={index} employee={employee} />;
      })}
    </div>
  );
};

export default TeamSection;
