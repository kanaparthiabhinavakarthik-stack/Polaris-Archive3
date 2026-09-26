export interface Discipline {
  slug: string;
  index: string;
  name: string;
  description: string;
  records: string;
}

export const disciplines: Discipline[] = [
  {
    slug: "glaciology",
    index: "01",
    name: "Glaciology",
    description: "Ice cores, flow dynamics and the physics of frozen time.",
    records: "1,842 records",
  },
  {
    slug: "climate",
    index: "02",
    name: "Climate",
    description: "Atmospheric reconstructions from trapped gas and isotope ratios.",
    records: "2,307 records",
  },
  {
    slug: "wildlife",
    index: "03",
    name: "Wildlife",
    description: "Long-term observation of polar species and shifting ranges.",
    records: "961 records",
  },
  {
    slug: "oceanography",
    index: "04",
    name: "Oceanography",
    description: "Sea-ice, current and salinity data across the polar basins.",
    records: "1,530 records",
  },
];

export interface Finding {
  id: string;
  station: string;
  discipline: string;
  title: string;
  summary: string;
  year: string;
  location: string;
}

export const findings: Finding[] = [
  {
    id: "D-0142",
    station: "Station 7",
    discipline: "Glaciology",
    title: "The ice memory of the last three centuries",
    summary:
      "A 312-metre ice core retrieved from the Devon ice shelf holds trapped air from 690 years ago — a continuous breath of the planet's past, one winter at a time.",
    year: "2024",
    location: "DeVries Ice Shelf, East Antarctica",
  },
  {
    id: "C-0091",
    station: "Station 3",
    discipline: "Climate",
    title: "Spring methane fluxes above the two-decade mean",
    summary:
      "Flux towers across the Laptev coast recorded spring emissions running 40% above the long-term average for a third consecutive season.",
    year: "2025",
    location: "Laptev Sea coast, Siberia",
  },
  {
    id: "W-0217",
    station: "Station 11",
    discipline: "Wildlife",
    title: "A rookery that moved north",
    summary:
      "An emperor penguin colony abandoned its century-old breeding ground and re-established 34 km north, following the retreating fast ice.",
    year: "2023",
    location: "Weddell Sea, Antarctica",
  },
  {
    id: "O-0058",
    station: "Station 2",
    discipline: "Oceanography",
    title: "Warm deep water reaches the grounding line",
    summary:
      "Moored instruments detected circumpolar deep water crossing the continental shelf and reaching the glacier grounding line in winter for the first time.",
    year: "2024",
    location: "Amundsen Sea, West Antarctica",
  },
  {
    id: "G-0330",
    station: "Station 5",
    discipline: "Glaciology",
    title: "Crevasse fields widening ahead of schedule",
    summary:
      "Repeat lidar surveys show crevasse density increasing 12% per decade along the shear margins of two major outlet glaciers.",
    year: "2022",
    location: "Sermeq Kujalleq, Greenland",
  },
  {
    id: "C-0144",
    station: "Station 9",
    discipline: "Climate",
    title: "The polar night is warming fastest",
    summary:
      "Winter warming at high-latitude stations is now outpacing summer warming by a factor of three, reshaping the entire cold-season energy budget.",
    year: "2025",
    location: "Ny-Ålesund, Svalbard",
  },
];

export interface MediaItem {
  kind: string;
  title: string;
  image: string;
  alt: string;
}

export const studentResources = [
  {
    name: "Datasets",
    description: "Open CSVs with tidy metadata ready for analysis.",
  },
  {
    name: "Field notes",
    description: "Annotated journals from six active expeditions.",
  },
  {
    name: "Lesson packs",
    description: "Graded reading packs for secondary and A-level study.",
  },
];
