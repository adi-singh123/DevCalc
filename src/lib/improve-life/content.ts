export const improveLifeFaqs = [
  {
    q: "Is this a random horoscope generator?",
    a: "No. DevCalc normalizes the birth date, local time, birthplace and historical timezone into a UTC instant, calculates planetary longitudes, and applies a fixed version of the documented rules. The same normalized inputs and rule version produce the same result.",
  },
  {
    q: "Which birth details affect the calculation?",
    a: "Birth date determines the astronomical date. Birth time affects the Ascendant and houses. Birthplace latitude and longitude affect the local horizon, while the IANA timezone converts the entered local time to the correct UTC instant. Your name and gender are used only for report wording.",
  },
  {
    q: "What happens if I do not know my birth time?",
    a: "DevCalc creates a limited report and omits the Ascendant, houses and other time-sensitive conclusions. Noon is used only to estimate date-stable planetary positions and is never presented as your birth time.",
  },
  {
    q: "How are past, present and future periods calculated?",
    a: "The timeline uses the traditional Vimshottari Mahadasha sequence. Its starting balance is calculated from the Moon's position within its birth Nakshatra. These periods are presented as traditional themes, not guaranteed events or probabilities.",
  },
  {
    q: "What are D1, D9 and D10 in this report?",
    a: "D1 is the main sidereal birth-chart view. D9 and D10 are mathematical divisional-sign placements derived from planetary longitude. This version shows their sign placements but does not claim a complete divisional-chart interpretation.",
  },
  {
    q: "Can the report guarantee marriage, career, money or health events?",
    a: "No. Astrology is a traditional belief system and is not scientifically validated for predicting events or personality. Use the report for reflection only, never as medical, legal, financial, relationship or safety advice.",
  },
  {
    q: "Does this version calculate every Jyotish technique?",
    a: "No. It currently covers sidereal planetary positions, mean lunar nodes, whole-sign houses when birth time is known, Nakshatra and Pada, Vimshottari Mahadasha, and D9/D10 sign placements. It does not claim full Shadbala, Ashtakavarga, Yoga, Dosha, transit, Antardasha or Pratyantardasha analysis.",
  },
  {
    q: "Are my birth details stored?",
    a: "The report is calculated in your browser. The birthplace search sends only the location text to the DevCalc location endpoint so coordinates and a timezone can be resolved; the completed birth profile is not submitted to a report database.",
  },
];

export const calculationParameters = [
  { name: "Birth date", purpose: "Sets the astronomical date used for planetary positions." },
  { name: "Local birth time", purpose: "Determines the precise instant, Ascendant and house placements." },
  { name: "Birthplace coordinates", purpose: "Latitude and longitude define the local horizon for the Ascendant." },
  { name: "Historical timezone", purpose: "Converts local civil time to UTC, including the applicable offset." },
  { name: "Sidereal correction", purpose: "A documented mean Lahiri-style ayanamsha converts tropical longitude to sidereal longitude." },
  { name: "Planetary longitude", purpose: "Locates each supported planet in a sign, degree, Nakshatra and Pada." },
  { name: "Moon Nakshatra", purpose: "Sets the starting planet and remaining balance of the Vimshottari timeline." },
  { name: "Rule version", purpose: "Keeps wording and interpretation rules deterministic and reviewable." },
];
