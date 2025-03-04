import Modal from "../../../components/Modal";
import { styled } from "@mui/material";
import TYPOGRAPHY from "../../../assets/Typography";
import formatDescription from "../../../utils/formatDescription";

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
      <Name>{name}</Name>
      <Title>{title}</Title>
      {formatDescription(biography)}
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
