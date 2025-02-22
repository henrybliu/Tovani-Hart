import { styled } from "@mui/material";
import TYPOGRAPHY from "../assets/Typography";

type SectionHeaderProps = {
  children: React.ReactNode;
};

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return <Container>{children}</Container>;
};

const Container = styled("div")({
  textTransform: "uppercase",
  fontSize: TYPOGRAPHY.fontSize.h1,
});

export default SectionHeader;
