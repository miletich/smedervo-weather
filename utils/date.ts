type FormatDate = (date: Date) => string;

const locale = 'en-GB';

export const formatLegendDate: FormatDate = (date) => {
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
