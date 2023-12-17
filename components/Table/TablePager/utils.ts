import getRange from '@/utils/getRange';

export type TablePagerConfig = Record<'count' | 'limit' | 'offset', number>;

type GetFromOffsetAndLimit = (offset: number, limit: number) => number;

export const getCurrentPage: GetFromOffsetAndLimit = (offset, limit) =>
  offset > 0 ? Math.ceil(offset / limit) : 1;

export const getNextOffset: GetFromOffsetAndLimit = (offset, limit) =>
  offset + limit;

export const getPreviousOffset: GetFromOffsetAndLimit = (offset, limit) =>
  offset - limit;

type GetPageCount = (count: number, limit: number) => number;
export const getPageCount: GetPageCount = (count, limit) =>
  Math.ceil(count / limit);

type GetOffset = (page: number, limit: number) => number;
export const getOffset: GetOffset = (page, limit) => (page - 1) * limit;

type GetHasNextOffset = (
  count: number,
  offset: number,
  limit: number
) => boolean;
export const getHasNextOffset: GetHasNextOffset = (count, offset, limit) =>
  count > limit + offset;

type GetHasPreviousOffset = (offset: number) => boolean;
export const getHasPreviousOffset: GetHasPreviousOffset = (offset) =>
  offset > 0;

type GetShouldShrinkLeft = (
  offset: number,
  limit: number,
  /** number of pages to be shown on each side of the current page */
  padding: number
) => boolean;
/** Should page numbers be replaced with `...` */
export const getShouldShrinkLeft: GetShouldShrinkLeft = (
  offset,
  limit,
  padding
) => {
  const currentPage = getCurrentPage(offset, limit);

  // 3 === first page button (1) + next page button (2) + current page button
  return padding + 3 < currentPage;
};

type GetShouldShrinkRight = (
  count: number,
  offset: number,
  limit: number,
  /** number of pages to be shown on each side of the current page */
  padding: number
) => boolean;
/** Should page numbers be replaced with `…` */
export const getShouldShrinkRight: GetShouldShrinkRight = (
  count,
  offset,
  limit,
  padding
) => {
  const currentPage = getCurrentPage(offset, limit);
  const pageCount = getPageCount(count, limit);

  // 2 === last page button + the one before it (page button or `…`)
  return currentPage + padding + 2 < pageCount;
};

type GetShouldNotShrink = (
  count: number,
  limit: number,
  padding: number
) => boolean;
export const getShouldNotShrink: GetShouldNotShrink = (
  count,
  limit,
  padding
) => {
  const pageCount = getPageCount(count, limit);

  // 5 === first + last + current page buttons + '<' + '>'
  // 2 because padding is applied on each side of the current button
  return pageCount <= 5 + padding * 2;
};

type getRangeForLabels = (start: number, end: number) => string[];
export const getRangeForLabels: getRangeForLabels = (a, b) =>
  getRange(a, b).map(String);

type GetPaginationLabels = (
  count: number,
  offset: number,
  limit: number,
  padding: number
) => string[];
export const getPaginationLabels: GetPaginationLabels = (
  count,
  offset,
  limit,
  padding
) => {
  const currentPage = getCurrentPage(offset, limit);
  const pageCount = getPageCount(count, limit);
  const shouldNotShrink = getShouldNotShrink(count, limit, padding);
  const shouldShrinkLeft = getShouldShrinkLeft(offset, limit, padding);
  const shouldShrinkRight = getShouldShrinkRight(count, offset, limit, padding);
  console.log({ shouldNotShrink, shouldShrinkLeft, shouldShrinkRight });

  if (shouldNotShrink) {
    return getRangeForLabels(1, pageCount);
  } else if (shouldShrinkLeft && !shouldShrinkRight) {
    return [
      '1',
      '…',
      ...getRangeForLabels(pageCount - padding * 2 - 2, pageCount),
    ];
  } else if (shouldShrinkRight && !shouldShrinkLeft) {
    return [...getRangeForLabels(1, padding * 2 + 3), '…', String(pageCount)];
  } else {
    return [
      '1',
      '…',
      ...getRangeForLabels(currentPage - padding, currentPage + padding),
      '…',
      String(pageCount),
    ];
  }
};
