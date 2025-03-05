import Modal from "../../../components/Modal";
import { styled } from "@mui/material";
import TYPOGRAPHY from "../../../assets/Typography";
import formatDescription from "../../../utils/formatDescription";
import FadeIn from "../../../components/FadeIn";

type EmployeeModalProps = {
  name: string;
  title: string;
  biography: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const EmployeeModal = ({
  name,
  title,
  biography,
  setShowModal,
}: EmployeeModalProps) => {
  return (
    <Modal setShowModal={setShowModal}>
      <FadeIn>
        <Name>{name}</Name>
      </FadeIn>
      <FadeIn delay={100}>
        <Title>{title}</Title>
      </FadeIn>
      <FadeIn delay={200}> {formatDescription(biography)}</FadeIn>
    </Modal>
  );
};

const Name = styled("p")({
  fontSize: TYPOGRAPHY.fontSize.h3,
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
});

const Title = styled("p")({
  fontSize: TYPOGRAPHY.fontSize.paragraph,
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
});

export default EmployeeModal;
