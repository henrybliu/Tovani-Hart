import Modal from "../../../components/Modal";
import { styled } from "@mui/material";
import TYPOGRAPHY, { Paragraph } from "../../../assets/Typography";

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
  const paragraphs = biography.split("\n");

  return (
    <Modal setShowModal={setShowModal}>
      <Name>{name}</Name>
      <Title>{title}</Title>
      {paragraphs.map((paragraph, index) => (
        <>
          <Paragraph key={index}>{paragraph}</Paragraph>
          {index !== paragraphs.length - 1 && <br />}
        </>
      ))}
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
