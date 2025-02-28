type HomeConstantsProps = {
  backgroundImage: string;
  header: string;
  sendResumeText: string;
  emailAddress: string;
  sendResumeAnywayText: string;
  hiringText: string;
  positionHiring: string;
  positionBulletPoints: string[];
  positionAvailability: string;
};

const HOME_CONSTANTS: HomeConstantsProps = {
  backgroundImage: "wall-angle.jpg",
  header: "Tovani Hart is now hiring",
  sendResumeText: "Send resumes to",
  emailAddress: "info@tovanihart.com",
  sendResumeAnywayText:
    "Don't see the position you're looking for? Send us your resume anyway!",
  hiringText: "Currently hiring:",
  positionHiring: "Architect in Training",
  positionBulletPoints: [
    "Have a positive attitude under pressure and an ability to complete many tasks quickly and accurately, in a team setting, under the guidance of our Design Directors",
    "Have excellent verbal and written communication skills",
    "Have patience and diligence, and a willingness to work on all types of tasks from intensely creative to the most basic production and administrative tasks",
    "Three to five years of architectural experience",
    "Have superior design talent with a creative, curious character, and an ability to solve problems",
    "Display mastery of graphic software including Adobe Creative Suite products, AutoCAD, Revit (SketchUp and Rhino are a bonus), and Microsoft Office",
    "Willing and interested in learning",
    "Be able to work with music playing – mostly 80’s tunes",
    "Be able to parallel park with ease and confidence",
    "Need no direction on how to sweep 30 feet of sidewalk effectively",
    "Can be caught holding the door open for a total stranger",
    "Be driven to work as a team with Customer Service as a guiding principle",
  ],
  positionAvailability:
    "This is a full-time position available immediately in Olympia, Washington.",
};

export default HOME_CONSTANTS;
