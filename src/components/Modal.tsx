import { styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SPACING from "../assets/Spacing";
import COLORS from "../assets/Colors";
import WestIcon from "@mui/icons-material/West";
import TYPOGRAPHY from "../assets/Typography";
import useMobileScreen from "../utils/useMobileScreen";
import FadeIn from "./FadeIn";

type ModalProps = {
  children: React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, setShowModal }: ModalProps) => {
  const isMobileScreen = useMobileScreen();

  return (
    <FadeIn
      slideIn={false}
      style={{
        position: "fixed",
        zIndex: 9999,
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        transition: "opacity 300ms ease-in-out",
      }}
    >
      <Background>
        <ModalContainer isMobileScreen={isMobileScreen}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CloseIcon
              sx={{
                fontSize: "50px",
                paddingTop: `${SPACING.extraLarge}px`,
                paddingRight: `${SPACING.extraLarge}px`,
                paddingBottom: `${SPACING.default}px`,
                cursor: "pointer",
                color: COLORS.black,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              onClick={() => {
                setShowModal((prev) => !prev);
              }}
            />
          </div>
          <ModalContent>
            {children} <BackButton setShowModal={setShowModal} />
          </ModalContent>
        </ModalContainer>
      </Background>
    </FadeIn>
  );
};

const BackButton = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <BackLinkContainer
      onClick={() => {
        setShowModal((prev) => !prev);
      }}
    >
      <WestIcon style={{ color: COLORS.black }} /> &nbsp;
      <BackLinkText>Back</BackLinkText>
    </BackLinkContainer>
  );
};

const BackLinkContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
  margin: `${SPACING.extraLarge}px 0px`,
  width: "fit-content",
  transition: "transform 0.3s ease-in-out",
  paddingRight: "3px",

  "&::after": {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "-2px",
    width: "0%",
    height: "2px",
    backgroundColor: COLORS.black,
    transition: "width 0.3s ease-in-out",
  },

  "&:hover": {
    transform: "scale(1.1)",
  },

  "&:hover::after": {
    width: "100%",
  },
});

const BackLinkText = styled("div")({
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  color: COLORS.black,
});

const Background = styled("div")({
  position: "fixed",
  zIndex: 9999,
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  backgroundColor: COLORS.transparentGray,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ModalContainer = styled("div")(
  ({ isMobileScreen }: { isMobileScreen: boolean }) => ({
    height: "85vh",
    width: isMobileScreen ? "90vw" : "60vw",
    backgroundColor: COLORS.white,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  })
);

const ModalContent = styled("div")({
  flexGrow: 1,
  width: "100%",
  overflowY: "auto",
  padding: `0px ${2 * SPACING.extraLarge}px ${SPACING.extraLarge}px ${
    2 * SPACING.extraLarge
  }px`,
  boxSizing: "border-box",
  color: COLORS.black,
});

export default Modal;
