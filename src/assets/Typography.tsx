import { styled } from "@mui/material";
import { MOBILE_NAVBAR_SCREEN_WIDTH } from "./Spacing";

const getParagraphFontSize = () => {
  return window.matchMedia(`(max-width: ${MOBILE_NAVBAR_SCREEN_WIDTH}px)`)
    .matches
    ? "16px"
    : "17.5px";
};

export const TYPOGRAPHY = {
  fontSize: {
    h1: "36px",
    h2: "28px",
    h3: "20px",
    h4: "18px",
    logo: "24px",
    paragraph: getParagraphFontSize(),
    note: "14px",
  },
  fontWeight: {
    bold: 500,
    bolder: 700,
  },
};

export const Paragraph = styled("div")({
  fontSize: TYPOGRAPHY.fontSize.paragraph,
});

// listener to update paragraph text size
window.addEventListener("resize", () => {
  TYPOGRAPHY.fontSize.paragraph = getParagraphFontSize();
});

export default TYPOGRAPHY;
