import { styled } from "@mui/material";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Section = ({ id, children, style }: SectionProps) => {
  return (
    <Container id={id} style={{ ...style }}>
      {children}
    </Container>
  );
};

const Container = styled("div")({
  width: "100vw",
  minHeight: "100vh",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export default Section;
