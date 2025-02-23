import { styled } from "@mui/material";
import SPACING from "./Spacing";

export const TYPOGRAPHY = {
  fontSize: {
    h1: "36px",
    h2: "28px",
    h3: "20px",
    h4: "18px",
    logo: "24px",
    paragraph: "17.5px",
  },
  fontWeight: {
    bold: 500,
    bolder: 700,
  },
};

export const Paragraph = styled("p")({
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  margin: `${SPACING.default}px 0px`,
});

export default TYPOGRAPHY;
