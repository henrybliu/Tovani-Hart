import SPACING from "../assets/Spacing";
import { styled } from "@mui/material";

type SectionContentProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const SectionContent = ({ children, style }: SectionContentProps) => {
  return <Container style={{ ...style }}>{children}</Container>;
};

const Container = styled("div")({
  marginLeft: `${SPACING.default}%`,
  marginRight: `${SPACING.default}%`,
  maxWidth: `${46 * SPACING.default}px`,
  lineHeight: 1.4,
  // TODO: when switching to mobile view, all content should be centered
});

export default SectionContent;
