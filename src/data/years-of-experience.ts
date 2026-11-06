// Start of the first role in data/experiences.ts (Levio, Oct. 2017).
const CAREER_START_YEAR = 2017;
const CAREER_START_MONTH = 9; // Zero-based: 9 is October.

// Counts completed years, so the number goes up each October.
export const getYearsOfExperience = (now: Date = new Date()): number => {
  const years = now.getUTCFullYear() - CAREER_START_YEAR;
  return now.getUTCMonth() < CAREER_START_MONTH ? years - 1 : years;
};

// Fills the {years} placeholder used in the site copy. Call this while
// rendering, not at module load, so the daily page refresh picks up a new value.
export const withYearsOfExperience = (text: string): string =>
  text.replace('{years}', String(getYearsOfExperience()));
