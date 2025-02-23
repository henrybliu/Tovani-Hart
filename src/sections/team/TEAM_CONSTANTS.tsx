export type EmployeeProps = {
  name: string;
  title: string;
  biography: string;
  coverImage: string; // image name
};

export const TEAM_CONSTANTS = {
  backgroundImage: "bg3.jpg",
  header: "Our Team",
};

export const TEAM_TEXT: EmployeeProps[] = [
  {
    name: "Jane Locke",
    title: "Project Coordinator",
    biography:
      "Jane has over 20 years of experience ranging from hands on civic service with Habitat for Humanity to coordinating consultants and contractor efforts through complex construction projects. She brings enthusiasm to each project placing highest priority on fulfilling our client's needs. She operates efficiently in all phases of work. Her immersion into projects that range from programming to construction administration has contributed to her well -rounded approach to problem solving. Jane is instrumental in the organization, assembly and distribution of design documents from initial educational planning meetings, jurisdictional applications through construction close out. Jane is a welcoming presence to people and is a dedicated member of Tovani Hart and is a critical team member.",
    coverImage: "testing",
  },
];

export default TEAM_CONSTANTS;
