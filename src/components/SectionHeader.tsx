import { styled } from "@mui/material";

type SectionHeaderProps = {
  children: React.ReactNode;
};

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return <Container>{children}</Container>;
};

const Container = styled("div")({
  textTransform: "uppercase",
});

export default SectionHeader;
