const locale = 'en-GB';

type FormatLegendDate = (date: Date) => string;
export const formatLegendDate: FormatLegendDate = (date) => {
  const options = {
    day: 'numeric',
    month: 'short',
  } as const;

  return date.toLocaleDateString(locale, options);
};

type FormatTooltipDate = (date: Date) => string;
export const formatTooltipDate: FormatLegendDate = (date) => {
  const options = {
    day: 'numeric',
    month: 'long',
  } as const;

  return date.toLocaleDateString(locale, options);
};
