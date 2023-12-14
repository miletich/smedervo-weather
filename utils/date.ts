type FormatDate = (date: Date) => string;

const locale = 'en-GB';

export const formatShortDate: FormatDate = (date) => {
  const options = {
    day: 'numeric',
    month: 'short',
  } as const;

  return date.toLocaleDateString(locale, options);
};

export const formatTooltipDate: FormatDate = (date) => {
  const options = {
    day: 'numeric',
    month: 'long',
  } as const;

  return date.toLocaleDateString(locale, options);
};

export const formatShortMonthName: FormatDate = (date) => {
  const options = {
    month: 'short',
  } as const;

  return date.toLocaleDateString(locale, options);
};

export const formatDateForCompare: FormatDate = (date) =>
  date.toISOString().split('T')[0];
