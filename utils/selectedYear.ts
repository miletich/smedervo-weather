type CreateSelectedYear = (year?: number) => {
  getYear: () => number;
  setYear: (year: number) => void;
};
const createSelectedYear: CreateSelectedYear = (year = 2022) => {
  let selectedYear = year;

  return {
    getYear: () => selectedYear,
    setYear: (newYear) => {
      selectedYear = newYear;
    },
  };
};

export const selectedYear = createSelectedYear();
