import { styled } from "@mui/material";
import TYPOGRAPHY from "../assets/Typography";
import SPACING from "../assets/Spacing";

type SectionHeaderProps = {
  children: React.ReactNode;
};

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return <Container>{children}</Container>;
};

const Container = styled("div")({
  textTransform: "uppercase",
  fontSize: TYPOGRAPHY.fontSize.h1,
  fontWeight: TYPOGRAPHY.fontWeight.bold,
  marginTop: `${15 * SPACING.default}px`,
  marginBottom: `${SPACING.extraLarge}px`,
});

export default SectionHeader;
