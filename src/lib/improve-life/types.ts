export type BirthTimeAccuracy = "exact" | "approximate" | "unknown";

export type BirthPlace = {
  label: string;
  latitude: number;
  longitude: number;
  timezone: string;
};

export type BirthDetails = {
  name: string;
  gender: "male" | "female" | "other";
  date: string;
  time: string;
  timeAccuracy: BirthTimeAccuracy;
  place: BirthPlace;
};

export type PlanetPosition = {
  name: string;
  longitude: number;
  sign: string;
  degree: number;
  nakshatra: string;
  pada: number;
  house?: number;
  navamsha: string;
  dashamsha: string;
};

export type DashaPeriod = {
  planet: string;
  start: string;
  end: string;
};

export type LifeReport = {
  details: BirthDetails;
  utcDate: string;
  ayanamsha: number;
  limited: boolean;
  lagna?: PlanetPosition;
  planets: PlanetPosition[];
  moon: PlanetPosition;
  sun: PlanetPosition;
  dashas: DashaPeriod[];
  currentDasha?: DashaPeriod;
};
