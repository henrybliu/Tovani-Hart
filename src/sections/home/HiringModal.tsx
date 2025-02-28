import Modal from "../../components/Modal";
import TYPOGRAPHY, { Paragraph } from "../../assets/Typography";
import { styled } from "@mui/material";

type HiringModalProps = {
  positionHiring: string;
  positionBulletPoints: string[];
  positionAvailability: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const HiringModal = ({
  positionHiring,
  positionBulletPoints,
  positionAvailability,
  setShowModal,
}: HiringModalProps) => {
  return (
    <Modal setShowModal={setShowModal}>
      <Position>{positionHiring}</Position>
      <ul>
        {positionBulletPoints.map((bulletPoint) => (
          <li>{bulletPoint}</li>
        ))}
      </ul>

      <Paragraph>{positionAvailability}</Paragraph>
    </Modal>
  );
};

const Position = styled("p")({
  fontSize: TYPOGRAPHY.fontSize.h4,
  fontWeight: TYPOGRAPHY.fontWeight.bolder,
});

export default HiringModal;
