import { styled } from "@mui/material";

const Section = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled("div")({
  minWidth: "100vw",
  minHeight: "100vh",
});

export default Section;
