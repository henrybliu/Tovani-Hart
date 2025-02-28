type NavbarLinkProps = {
  section: string;
  text: string;
};

type NavbarConstantsProps = {
  homeLink: NavbarLinkProps;
  projectsLink: NavbarLinkProps;
  servicesLink: NavbarLinkProps;
  approachLink: NavbarLinkProps;
  teamLink: NavbarLinkProps;
  contactLink: NavbarLinkProps;
};

export const NAVBAR_CONSTANTS: NavbarConstantsProps = {
  homeLink: { section: "home", text: "home" },
  projectsLink: { section: "projects", text: "projects" },
  servicesLink: { section: "services", text: "services" },
  approachLink: { section: "approach", text: "our approach" },
  teamLink: { section: "team", text: "our team" },
  contactLink: { section: "contact", text: "contact us" },
};

export default NAVBAR_CONSTANTS;
