import { styled } from "@mui/material";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

const Section = ({ id, children }: SectionProps) => {
  return <Container id={id}>{children}</Container>;
};

const Container = styled("div")({
  width: "100vw",
  minHeight: "100vh",
  overflow: "hidden",
});

export default Section;
