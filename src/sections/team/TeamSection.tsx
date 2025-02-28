import { useState, useEffect } from "react";
import SectionHeader from "../../components/SectionHeader";
import TEAM_CONSTANTS, { EMPLOYEE_CONSTANTS } from "./TEAM_CONSTANTS";
import Section from "../../components/Section";
import SectionContent from "../../components/SectionContent";
import { styled } from "@mui/material";
import ParallaxImage from "../../components/ParallaxImage";
import EmployeeTile from "./employees/EmployeeTile";
import SPACING, { MOBILE_NAVBAR_SCREEN_WIDTH } from "../../assets/Spacing";
import useScreenWidth from "../../utils/useScreenWidth";
import EmployeeModal from "./employees/EmployeeModal";

const { backgroundImage, header } = TEAM_CONSTANTS;
const employees = EMPLOYEE_CONSTANTS;

const TeamSection = ({ id }: { id: string }) => {
  return (
    <Section id={id}>
      <ParallaxImage imageName={backgroundImage} />
      <TeamContent />
    </Section>
  );
};

const TeamContent = () => {
  // grid resizing logic
  const screenWidth = useScreenWidth();
  const desktopMaxWidth = 70;
  const [maxWidth, setMaxWidth] = useState(desktopMaxWidth);
  const [tileSize, setTileSize] = useState(220);

  useEffect(() => {
    if (screenWidth <= MOBILE_NAVBAR_SCREEN_WIDTH) {
      setMaxWidth(100);
      setTileSize(300);
    } else if (screenWidth <= 1170) {
      setMaxWidth(50);
      setTileSize(220);
    } else if (screenWidth <= 1440) {
      setMaxWidth(65);
      setTileSize(220);
    } else {
      setMaxWidth(desktopMaxWidth);
      setTileSize(220);
    }
  }, [screenWidth]);

  // employee modal logic
  type EmployeeInfoProps = {
    name: string;
    title: string;
    biography: string;
  };

  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [employeeInfo, setEmployeeInfo] = useState<EmployeeInfoProps>({
    name: "",
    title: "",
    biography: "",
  });

  const handleOpenEmployeeModal = ({
    name,
    title,
    biography,
  }: EmployeeInfoProps) => {
    setShowEmployeeModal((prev) => !prev);
    setEmployeeInfo({ name, title, biography });
  };

  return (
    <>
      {showEmployeeModal && (
        <EmployeeModal {...employeeInfo} setShowModal={setShowEmployeeModal} />
      )}
      <SectionContent
        style={{
          maxWidth: `${maxWidth}%`,
          zIndex: 5,
          position: "relative",
        }}
      >
        <SectionHeader>{header}</SectionHeader>
        <EmployeeTileContainer tileSize={tileSize}>
          {employees.map((employee, index) => {
            return (
              <EmployeeTile
                key={index}
                {...employee}
                tileSize={tileSize}
                onClick={() => handleOpenEmployeeModal(employee)}
              />
            );
          })}
        </EmployeeTileContainer>
      </SectionContent>
    </>
  );
};

const EmployeeTileContainer = styled("div")(
  ({ tileSize }: { tileSize: number }) => ({
    width: "100%",
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, ${tileSize}px)`,
    gap: `${4 * SPACING.default}px`,
    marginBottom: `${10 * SPACING.default}px`,
    marginRight: `${10 * SPACING.default}px`,
  })
);

export default TeamSection;
