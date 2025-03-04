import { styled } from "@mui/material";
import TYPOGRAPHY from "../assets/Typography";
import SPACING from "../assets/Spacing";
import useMobileScreen from "../utils/useMobileScreen";

type SectionHeaderProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const SectionHeader = ({ children, style }: SectionHeaderProps) => {
  const isMobileScreen = useMobileScreen();

  return (
    <Container style={{ ...style }} isMobileScreen={isMobileScreen}>
      {children}
    </Container>
  );
};

const Container = styled("div")(
  ({ isMobileScreen }: { isMobileScreen: boolean }) => ({
    textTransform: "uppercase",
    fontSize: TYPOGRAPHY.fontSize.h1,
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    marginTop: `${(isMobileScreen ? 5 : 10) * SPACING.default}px`,
    marginBottom: `${SPACING.large}px`,
  })
);

export default SectionHeader;
