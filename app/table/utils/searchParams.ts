export type RawSearchParams = Record<'offset' | 'limit', string | undefined>;

export type NavigationSearchParams = Record<'offset' | 'limit', number>;
export type SearchParams = NavigationSearchParams;

type GetTableSearchParams = (params: RawSearchParams) => SearchParams;
export const getTableSearchParams: GetTableSearchParams = (params) => {
  const offset = (params.offset && +params.offset) || 0;
  const limit = (params.limit && +params.limit) || 15;

  return { offset, limit };
};

type BuildQueryString = (params: Record<string, string | number>) => string;
export const buildQueryString: BuildQueryString = (params) =>
  `?${Object.entries(params)
    .map(([k, v]) => `${k}=${v}`)
    .join('&')}`;
