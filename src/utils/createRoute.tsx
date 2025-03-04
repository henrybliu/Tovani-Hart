const sanitizeString = (input: string) => {
  return input
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .replace(/\band\b/g, "&")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
};

const createRoute = (input: string) => {
  return sanitizeString(input);
};
export default createRoute;
