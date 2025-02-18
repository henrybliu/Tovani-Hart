export type ProjectProps = {
  name: string;
  location: string;
  description: string;
  coverImage: string; // file path
  otherImages: string[]; // file paths
};

const PROJECTS_TEXT: ProjectProps[] = [
  {
    name: "609 Warehouse",
    location: "Olympia, Washington",
    description:
      "Todd Tovani and Trent Hart (Tovani Hart, PC) took their commitment and pride in their business to the next level by purchasing their own property in the heart of downtown Olympia. The warehouse was constructed in 1941 with solid concrete walls, heavy timber and a leaky roof. Todd and Trent led this renovation as the General Contractor. They worked directly with local tradesman to create an office space that will be their business home. Todd and Trent honored the history and character of the building with their design. This is evident in details throughout the building.",
    coverImage: "testing",
    otherImages: ["testing", "more testing"],
  },
];

export default PROJECTS_TEXT;
