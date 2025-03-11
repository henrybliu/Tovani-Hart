type ProjectConstantsProps = {
  header: string;
};

export const PROJECTS_CONSTANTS: ProjectConstantsProps = {
  header: "Projects",
};

export type ProjectProps = {
  name: string;
  location: string;
  description: string;
  coverImage: string;
  media: string[];
};

/*
NOTE:

For descriptions:
- use \n to end a paragraph (this shouldn't be added for the last paragraph)
  - example:
    - "paragraph 1 \n paragraph 2 \n paragraph 3"

- use \u2022 for bullet points and add a \n in the paragraph preceding the
  first bullet point and after the last bullet point
  - example:
    - "some random text \n \u2022 bullet point 1 \u2022 bullet point 2 \u2022 bullet point 3 \n"

For other media:
- accepts image files, videos, and video links
- for Vimeo and YouTube, ensure that they are of the following form:
 "https://www.youtube.com/embed/dQw4w9WgXcQ";  // YouTube
 "https://player.vimeo.com/video/123456789";   // Vinmeo
*/
export const PROJECTS_INFO: ProjectProps[] = [
  {
    name: "609 Warehouse",
    location: "Olympia, Washington",
    description:
      "Todd Tovani and Trent Hart (Tovani Hart, PC) took their commitment and pride in their business to the next level by purchasing their own property in the heart of downtown Olympia. The warehouse was constructed in 1941 with solid concrete walls, heavy timber and a leaky roof. Todd and Trent led this renovation as the General Contractor. They worked directly with local tradesman to create an office space that will be their business home. Todd and Trent honored the history and character of the building with their design. This is evident in details throughout the building.",
    coverImage: "609-thumb.jpg",
    media: [
      "609-const-2.jpg",
      "609-int-1.jpg",
      "609-door-sketch.jpg",
      "609-doors.jpg",
    ],
  },
  {
    name: "New Aspire Middle School",
    location: "Lacey, Washington",
    description:
      "Tovani Hart worked closely with NTPS through initial planning to purchase a vacant 80,000 square foot athletic facility and convert it into school district use. This multi-phased project began with a demolition phase to clean and secure the facility. A Temporary Use phase to support the adjacent high school modernization project through providing surge space and a third phase currently in process with design phase services to meet the needs of relocating New Aspire Middle School. This project has included complex master planning including boundary line adjustments and dedication of rights-of-way and persistent involvement with the City of Olympia through complicated changes in how the project is to be permitted. Project highlights include high school competition gymnasium, impressive circulation corridor and the expressed existing, reinforced structure. Phase III will be constructed while students occupy the temporary use space.",
    coverImage: "ntps-thumb.jpg",
    media: [
      "aspire-ext-1.jpg",
      "aspire-detail.jpg",
      "aspire-int-1.jpg",
      "aspire-int-2.jpg",
      "aspire-int-3.JPG",
      "aspire-plan.png",
      "aspire-entry.jpg",
    ],
  },
  {
    name: "Olympia Fireplace and Spa",
    location: "Olympia, Washington",
    description:
      "After a fire burned a zero lot line building in the historic district of downtown Olympia, the building owner sought to re-build the structure. The Owner envisioned continued use as a warehouse with the potential for future retail, or business tenants. Tovani Hart developed a design allowing the current tenant to easily operate, all while giving the street presence of a retail establishment. This building grants the owner flexibility for potential conversion of the space for retail, office, services, or restaurant. The brick façade and entry alcove provide a strong presence and measured relief from the existing 4th Avenue street wall, while façade details, awnings, and the color pallet compliment the historical context of downtown. Interior exposed barrel vault trusses with raw steel connections express the original structure which burned down.",
    coverImage: "oly-fp_sidewalk-72dpi-285px.jpg",
    media: [
      "oly-fp_sidewalk-72dpi-1400px.jpg",
      "oly-fp_sidewalk02-72dpi-1400px.jpg",
      "oly-fp_detail-72dpi-1400px.jpg",
      "ofs-rendering-ext.jpg",
      "ofs-const-1.jpg",
      "ofs-const-2.jpg",
    ],
  },
  {
    name: "Waterfront Residence",
    location: "Olympia, Washington",
    description: "",
    coverImage: "waterfront-residence_72dpi-285px.jpg",
    media: [
      "waterfront-residence-horz.jpg",
      "martin-entry-72dpi-1400px.jpg",
      "martin-kitchen-72dpi-1400px.jpg",
      "martin-greatrm-72dpi-1400px.jpg",
      "martin-greatrm03-72dpi-1400px.jpg",
      "martin-lookings-72dpi-1400px.jpg",
      "martin-patiosm-72dpi-1400px.jpg",
      "martin-greatrm02-72dpi-1400px.jpg",
    ],
  },
  {
    name: "Tumwater High School PE Improvments",
    location: "Tumwater, Washington",
    description:
      "The THS PE Improvements Project includes an addition of approximately 3,000sf providing a new Weight training space, remodeling 150sf of existing adjacent space to include storage, mechanical and a restroom, along with refinishing floors in both the new and old gyms. Work includes extending normal electrical, communications and data capabilities, along with hydronic heating piping, domestic and fire suppression water systems. The addition will be a simple light filled space with structural systems taking on the character and of the gymnasiums including a wood deck ceiling and exposed glu-lam beams and purlins. The design incorporates a large sheltering roof providing outdoor training area connected to the weight room by large overhead sectional doors.",
    coverImage: "ths-thumb.jpg",
    media: [
      "ths-ext-ne-corner.jpg",
      "ths-ext-detail.jpg",
      "ths-interior-1.jpg",
      "ths-ext-detail2.jpg",
      "ths-interior-2.jpg",
    ],
  },
  {
    name: "Residential | Olympia Boat Storage",
    location: "Olympia, Washington",
    description:
      "This residential project is located on the Olympia waterfront with views to the Westside and to downtown Olympia. Initial site work consisted of reinforcing the existing hillside and the 1920’s residence with pin-piles. The sixteen foot deep excavated site of the three-bay boat storage and patio, exposed adjacent pin-piles for the historic home. The new 650 square foot structure includes an outdoor shower, three barrel-vaulted bays with wood carriage doors, and a utility alcove, all out of exposed board form. The roof of the new boat storage becomes a large, functioning, concrete patio with wrought-iron railings taking advantage of the sweeping views of Budd Inlet.",
    coverImage: "boat-storage_72dpi-285px.jpg",
    media: [
      "boat-storage_72dpi-1400px.jpg",
      "foley_lower-patio.jpg",
      "foley-sketch.jpg",
      "foley_planter.jpg",
      "foley_intconc.jpg",
      "foley_sketch_ext-shwr.jpg",
      "foley_extshower.jpg",
      "foley_barrelvault.jpg",
    ],
  },
  {
    name: "Auxiliary Gymnasium",
    location: "Lacey, Washington",
    description:
      "The Auxiliary Gymnasium adds approximately 13,000 square feet of new building for basketball, volleyball, pickle ball and a separate practice space for wrestling. This building fills a need at River Ridge High School with an ever-growing student population. Siting the building on an existing school campus with developed play-fields and utilities limited feasible options, but ultimately between the JV Baseball field and pedestrian access to 3rd Way was proven to be the best solution. The interior spaces maintain clear ceiling heights to allow for volleyball, full court basketball along with four half courts, future provisions for batting cage practice area, moveable bleacher seating for spectators, and two wrestling mats in the Mat Room. The exterior has large awnings at the north and the south entries for patron protection from the weather.",
    coverImage: "ntps-rrhs-aux-gym_285x285.jpg",
    media: [
      "ntps-rrhs-aux-gym_72dpi.jpg",
      "ntps-aux-gym_72dpi-exterior-north.jpg",
      "ntps-rrhs-aux-gym_72dpi-exterior-south.jpg",
      "ntps-rrhs-aux-gym-const2_72dpi.jpg",
      "ntps-rrhs-aux-gym-siteplan_72dpi.jpg",
      "ntps-rrhs-aux-gym-const_72dpi.jpg",
      "ntps-rrhs-aux-gym-elev_72dpi.jpg",
    ],
  },
  {
    name: "Olympia School District | Capital High School Fitness Addition and Modernization",
    location: "Olympia, Washington",
    description:
      "This project included 22,532 square feet of renovation area and 3,327 square feet of building addition. The existing spaces did not meet the needs of the physical education and athletic departments, and the interior finishes throughout the existing space had exceeded their useful life. The following major needs were addressed in the addition and modernization: \n \u2022Visible, publicly accessible, integrated cardio and weight room spaces \u2022Boys locker room divisible into two areas & Girls locker room expanded/updated for gender parity \u2022Secure indoor storage for each sport \u2022Referee toilet and shower facilities not accessed from within locker rooms \u2022Larger modern sports medicine space \u2022Replacement of aging finishes throughout existing spaces & existing mezzanine gym flooring \n In response to the identified needs, Tovani Hart developed an addition that fits with the character of the existing school and put together a phased design package that allowed construction to occur while the school was occupied. This project was completed September, 2014.",
    coverImage: "chs-thumb.jpg",
    media: [
      "chs-wr_exterior.jpg",
      "chs-rendered-flr.png",
      "chs-wr_exteriorcanopy.jpg",
      "chs-wr_interior-finishes.jpg",
      "chs-wr_westelev.jpg",
    ],
  },
  {
    name: "The Percival Condominiums",
    location: "Olympia, Washington",
    description:
      "In June of 2017, Tovani Hart was invited to participate in the design of a seven story condominium building in downtown Olympia, Washington.  Sited directly across from Percival Landing Park in the heart of the City, the condominiums are adjacent to several well-established businesses including restaurants, night clubs, along with Olympia’s Community Center.  Capitalizing on the natural amenities of the location, the building opens to views on all sides and includes unobstructed vistas of Budd Inlet and the Olympic Peninsula.  The 28 unit building provides a variety of plan options ranging from one bedroom plus a den at approximately 1,300 square feet, to two bedrooms plus a den with approximately 2,370 square feet.  The first two levels include lobby access and a secure private parking structure for residents.  Each unit is designed with open concept great rooms, expansive views and a large balcony.",
    coverImage: "percival_ext-render-tumbnail.jpg",
    media: [
      "percival_ext-render.jpg",
      "percival-3-6-flr-plan.jpg",
      "percival-7th-flr-plan.jpg",
      "percival_int-render.jpg",
      "percival_int-render-ne.jpg",
      "percival-mktg-301.jpg",
      "percival-mktg-703.jpg",
      "percival_int-render-mbed-sw.jpg",
    ],
  },
  {
    name: "Adna Elementary School | Modernization and Addition",
    location: "Adna, Washington",
    description:
      "Adna Elementary Modernization planning began in earnest immediately following a successful bond election where multiple community meetings allowed for the clear supported evolution of plans to improve this loved school. The project includes the modernization of approximately 25,000 square feet of existing educational spaces and provide 14,500 square feet of new space. New spaces include gymnasium, covered play, visible and welcoming front office and a warming kitchen. The project will be completed through the implementation of a detailed phasing plan that will address significant site work, new services, and the safety of students during the duration of an occupied facility.",
    coverImage: "adna_gym-72dpi-258px.jpg",
    media: [
      "adna_gym-72dpi-1400px.jpg",
      "adna_classroom-72dpi-1400px.jpg",
      "adna_classroom02-72dpi-1400px.jpg",
      "adna_walkway-72dpi-1400px.jpg",
      "adna_gym.jpg",
      "adna_classadd.jpg",
      "adna_classroom.jpg",
      "adna_walkway.jpg",
    ],
  },
  {
    name: "Owens Residence | Multi-Phased Remodel",
    location: "Olympia, Washington",
    description:
      "This residential project is within an established Olympia neighborhood nestled at the end of the cul-de-sac. The first phase of work focused on necessary home repairs to the siding, roofing and existing wood burning fireplace, and chimney. In process of residing the exterior the Owner made a decision to express the design elements of their Colonial home by incorporating functional shutters, inlaid brickwork in walkways and patios, expressive exterior trim and a new covered porch with copper detailing. The second phase included an extensive first floor remodel of the foyer, kitchen, dining room, laundry, guest bath, and family rooms. Originally there were several doorways to access the kitchen, dining, and laundry rooms resulting in expansive circulation space and a very small kitchen, the remodel yielded a large open kitchen with peninsula that opens to the adjacent family room. The new office space supports desk area for the entire family including a small sitting area.",
    coverImage: "owens-thumb.jpg",
    media: [
      "owens_alt.jpg",
      "owens-entry-render.jpg",
      "owens_door.jpg",
      "owens_kitchen.jpg",
      "owens_kitchen2.jpg",
    ],
  },
  {
    name: "Tumwater Alternative Learning Center",
    location: "Tumwater, WA",
    description:
      "Tovani Hart worked closely with the Tumwater School District and the New Market Skills Center to design a new learning environment for the District's existing Options program.  The 14,500 sf Learning Center includes ten classrooms with high windows at both the interior and exterior walls.  This design element allows natural light to flood the classrooms, and the building interior, while visually screening the activities occurring beyond the walls.  The classrooms are organized around a dynamic circulation core with small gathering areas nestled beneath soft lower ceilings.  Creating a focused and secure space was a key factor during the design process.  The large sheltering roof protects a transparent main entry.  The control point just inside the main entry has a strong visual connection to the circulation area enhancing supervision and student safety.",
    coverImage: "talc-285x285_web.jpg",
    media: [
      "talc-rendering_web.jpg",
      "talc-entry_web.jpg",
      "talc-rendering_web.jpg",
      "talc-teaching-space_web.jpg",
    ],
  },
];

export default PROJECTS_CONSTANTS;
