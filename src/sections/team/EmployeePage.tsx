import { EmployeeProps } from "./TEAM_TEXT";

const EmployeePage = ({ employee }: { employee: EmployeeProps }) => {
  const name = employee.name;
  const title = employee.title;
  const biography = employee.biography;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <h3>{biography}</h3>
    </div>
  );
};

export default EmployeePage;
