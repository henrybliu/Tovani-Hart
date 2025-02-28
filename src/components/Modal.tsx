import { styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SPACING from "../assets/Spacing";
import COLORS from "../assets/Colors";
import WestIcon from "@mui/icons-material/West";
import TYPOGRAPHY from "../assets/Typography";
import useMobileScreen from "../utils/useMobileScreen";

type ModalProps = {
  children: React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, setShowModal }: ModalProps) => {
  const isMobileScreen = useMobileScreen();

  return (
    <Background>
      <ModalContainer isMobileScreen={isMobileScreen}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CloseIcon
            style={{
              fontSize: "50px",
              paddingTop: `${SPACING.extraLarge}px`,
              paddingRight: `${SPACING.extraLarge}px`,
              paddingBottom: `${SPACING.default}px`,
              cursor: "pointer",
              color: COLORS.black,
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
      <WestIcon style={{ color: COLORS.black }} /> &nbsp;{" "}
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
});

const BackLinkText = styled("div")({
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  textDecoration: "underline",
  marginRight: SPACING.small,
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

const ModalContainer = styled("div")<{ isMobileScreen?: boolean }>(
  ({ isMobileScreen }) => ({
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
