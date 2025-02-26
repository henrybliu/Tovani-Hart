import { styled } from "@mui/material";
import TYPOGRAPHY from "../assets/Typography";
import SPACING from "../assets/Spacing";

type SectionHeaderProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const SectionHeader = ({ children, style }: SectionHeaderProps) => {
  return <Container style={{ ...style }}>{children}</Container>;
};

const Container = styled("div")({
  textTransform: "uppercase",
  fontSize: TYPOGRAPHY.fontSize.h1,
  fontWeight: TYPOGRAPHY.fontWeight.bold,
  marginTop: `${10 * SPACING.default}px`,
  marginBottom: `${SPACING.large}px`,
});

export default SectionHeader;
