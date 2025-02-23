import { styled } from "@mui/material";

const Section = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled("div")({
  width: "100vw",
  minHeight: "110vh",
  overflow: "hidden",
});

export default Section;
