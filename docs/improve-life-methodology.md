# Improve Life calculation methodology

## Provider and licensing

DevCalc uses Astronomy Engine for Sun, Moon and planetary astronomical positions. Astronomy Engine is MIT licensed and documents verification against NOVAS and JPL Horizons. Swiss Ephemeris was evaluated but not adopted because its official distribution requires either AGPL compliance for the complete service or a professional commercial licence before public activation.

Location search uses Open-Meteo's geocoding endpoint to resolve a selected place to WGS84 latitude/longitude and an IANA timezone identifier. Historical UTC conversion uses the JavaScript runtime's IANA timezone data through `Intl.DateTimeFormat`.

## Version 1.0 conventions

- Astrology framework: traditional Vedic/Jyotish presentation
- Zodiac: sidereal
- Ayanamsha: documented mean Lahiri-style approximation; not represented as Swiss Ephemeris output
- Houses: whole-sign houses when birth time is known
- Nodes: mean Rahu; Ketu exactly opposite
- Vargas: mathematical D9 and D10 sign placement
- Timing: Vimshottari Mahadasha using the Moon's Nakshatra and balance at birth
- Unknown time: noon is used only for date-stable position estimation; Lagna, houses and time-sensitive interpretations are omitted

## Explicitly unsupported in version 1.0

The interface must not claim full Antardasha/Pratyantardasha, Shadbala, Ashtakavarga, transit, Yoga, Dosha, combustion, retrograde or deterministic event-window analysis until those modules have independent reference fixtures and documented conventions.

## Interpretation policy

Interpretations are fixed templates selected from calculated factors. They describe traditional themes, not probabilities or guaranteed events. The feature is not medical, legal, financial, relationship or safety advice, and Vedic astrology is not scientifically validated as a predictive method.
