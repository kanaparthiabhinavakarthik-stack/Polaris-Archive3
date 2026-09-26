export type AccessLevel = "Public" | "Researcher" | "Student";

export type ArchiveDocument = {
  id: string;
  title: string;
  year: string;
  discipline: string;
  author: string;
  access: AccessLevel;
  description: string;
  file: string;
};

export const documents: ArchiveDocument[] = [
  {
    id: "DOC-001",
    title: "Antarctic Treaty Reference",
    year: "1959",
    discipline: "Polar Governance",
    author: "Antarctic Treaty Secretariat",
    access: "Public",
    description:
      "A reference summary describing the Antarctic Treaty framework and international scientific cooperation.",
    file: "/documents/antarctic-treaty-reference.txt",
  },
  {
    id: "DOC-002",
    title: "ICESat-2 Polar Ice Measurements",
    year: "2018–Present",
    discipline: "Glaciology",
    author: "NASA",
    access: "Public",
    description:
      "Reference material about satellite laser measurements used to study ice elevation and polar change.",
    file: "/documents/icesat2-reference.txt",
  },
  {
    id: "DOC-003",
    title: "Antarctic Ozone Research",
    year: "1970s–Present",
    discipline: "Atmospheric Science",
    author: "Polar Research Community",
    access: "Public",
    description:
      "An introductory record covering observation and scientific study of seasonal Antarctic ozone changes.",
    file: "/documents/antarctic-ozone-reference.txt",
  },
  {
    id: "DOC-004",
    title: "Antarctic Digital Data Resources",
    year: "Current",
    discipline: "Geospatial Science",
    author: "SCAR Research Community",
    access: "Researcher",
    description:
      "A reference record explaining how Antarctic geospatial datasets can support scientific research.",
    file: "/documents/scar-data-reference.txt",
  },
  {
    id: "DOC-005",
    title: "Student Polar Research Template",
    year: "2026",
    discipline: "Student Research",
    author: "Polaris Archive",
    access: "Student",
    description:
      "A structured template students can use to prepare a small, reproducible polar research project.",
    file: "/documents/student-polar-research-template.txt",
  },
];

export const stations = [
  {
    name: "McMurdo Station",
    country: "United States",
    region: "Ross Island",
    type: "Research Station",
  },
  {
    name: "Amundsen–Scott South Pole Station",
    country: "United States",
    region: "Geographic South Pole",
    type: "Research Station",
  },
  {
    name: "Concordia Station",
    country: "France / Italy",
    region: "Dome C",
    type: "Research Station",
  },
  {
    name: "Vostok Station",
    country: "Russia",
    region: "East Antarctica",
    type: "Research Station",
  },
  {
    name: "Neumayer Station III",
    country: "Germany",
    region: "Ekström Ice Shelf",
    type: "Research Station",
  },
  {
    name: "Halley VI",
    country: "United Kingdom",
    region: "Brunt Ice Shelf",
    type: "Research Station",
  },
  {
    name: "Troll Station",
    country: "Norway",
    region: "Queen Maud Land",
    type: "Research Station",
  },
  {
    name: "Summit Station",
    country: "United States",
    region: "Greenland",
    type: "Research Station",
  },
  {
    name: "Casey Station",
    country: "Australia",
    region: "Wilkes Land",
    type: "Research Station",
  },
  {
    name: "Davis Station",
    country: "Australia",
    region: "Princess Elizabeth Land",
    type: "Research Station",
  },
  {
    name: "Mawson Station",
    country: "Australia",
    region: "Mac. Robertson Land",
    type: "Research Station",
  },
  {
    name: "Zhongshan Station",
    country: "China",
    region: "Princess Elizabeth Land",
    type: "Research Station",
  },
];
