import { styled } from "@mui/material";
import COLORS from "../assets/Colors";
import TYPOGRAPHY from "../assets/Typography";
import SPACING from "../assets/Spacing";

const logoImage = require("../assets/images/Tovani_Hart_Architects_Logo.png");

type LogoTextProps = {
  style?: React.CSSProperties;
  scale?: number;
};

export const LogoText = ({ style, scale }: LogoTextProps) => {
  return (
    <TextContainer style={{ ...style }} scale={scale}>
      Tovani Hart
    </TextContainer>
  );
};

const Logo = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <LogoContainer style={{ ...style }}>
      <img
        src={logoImage}
        alt="logo"
        style={{
          width: "105px",
          backgroundColor: COLORS.white,
        }}
      ></img>
      <LogoText />
    </LogoContainer>
  );
};

const LogoContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  marginBottom: "100px",
});

const TextContainer = styled("div")(
  ({ scale }: { scale: number | undefined }) => ({
    fontSize: scale
      ? `${parseFloat(TYPOGRAPHY.fontSize.logo) * scale}px`
      : TYPOGRAPHY.fontSize.logo,
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    textTransform: "uppercase",
    letterSpacing: scale ? `${parseFloat("4.1px") * scale}px` : "4.1px",
    whiteSpace: "nowrap",
    marginTop: `${SPACING.large}px`,
  })
);
export default Logo;
