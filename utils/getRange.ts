type GetRange = (a: number, b: number, acc?: number[]) => number[];
const getRange: GetRange = (a: number, b, acc = []) =>
  a <= b ? getRange(a + 1, b, [...acc, a]) : acc;

export default getRange;
