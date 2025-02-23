import Page from "../../../components/Section";
import { EmployeeProps } from "../TEAM_CONSTANTS";

const EmployeePage = ({ employee }: { employee: EmployeeProps }) => {
  const name = employee.name;
  const title = employee.title;
  const biography = employee.biography;

  return (
    <Page>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <h3>{biography}</h3>
    </Page>
  );
};

export default EmployeePage;
