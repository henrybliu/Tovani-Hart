import { Paragraph } from "../assets/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import { styled } from "@mui/material";

const formatDescription = (description: string) => {
  const sanitizedDescription = description
    .split("\n")
    .filter((paragraph) => paragraph.length > 0);
  const numParagraphs = sanitizedDescription.length;

  const paragraphs = sanitizedDescription.map((paragraph, index) => {
    // if a paragraph contains bullet points, extract them
    const bulletList = paragraph.split("\u2022").map((item, i) => {
      // the text before the first bullet point is not to be bulleted
      if (i > 0) {
        return (
          <BulletPoint key={`${index}-${i}`}>
            <CircleIcon style={{ fontSize: "8px", margin: "0px 8px" }} />
            <Paragraph>{item.trim()}</Paragraph>
          </BulletPoint>
        );
      }
      return null;
    });

    // wrap the paragraph's bullet points in an unordered list
    if (bulletList.length > 0 && paragraph.includes("\u2022")) {
      return (
        <div key={index} style={{ marginLeft: "20px" }}>
          {bulletList}
          {index !== numParagraphs - 1 && <br />}
        </div>
      );
    }

    return (
      <div key={index}>
        <Paragraph>{paragraph}</Paragraph>
        {index !== numParagraphs - 1 && <br />}
      </div>
    );
  });

  return paragraphs;
};

const BulletPoint = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export default formatDescription;
