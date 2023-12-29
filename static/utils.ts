import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import * as d3 from 'd3';
// @ts-ignore
import { dataSchema } from '../utils/data.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = '../public';
const outDir = 'static';
const warning = '// AUTOGENERATED: DO NOT MODIFY';

type GetFileList = () => string[];
const getFileList: GetFileList = () => {
  const fullPath = join(__dirname, sourceDir);
  let fileList: string[] = [];

  return readdirSync(fullPath);
};

type GetYears = () => number[];
export const getYears: GetYears = () => {
  const fileList = getFileList();

  return fileList.map((fileName) => +fileName.match(/\d+/)![0]);
};

export const saveYears = () => {
  const years = getYears();
  const content = `
  ${warning}

  export const years: number[] = [${getYears().join(', ')}];

  `;

  writeFileSync(join(__dirname, 'years.ts'), content);
};

const domainNames = ['tempmin', 'tempmax', 'precipprob', 'windspeed'] as const;

type DomainName = (typeof domainNames)[number];
export type Domains = Record<DomainName, [number, number]>;

type GetDomains = () => Domains;
export const getDomains: GetDomains = () => {
  const fileList = getFileList();

  const rawResults = fileList.map((file) => {
    const filePath = join(__dirname, sourceDir, file);
    const contents = readFileSync(filePath, 'utf8');
    const parsed = d3.csvParse(contents);

    return parsed;
  });

  const results = rawResults.map((r) => dataSchema.parse(r));

  return domainNames.reduce<Domains>(
    (acc, cur) => ({
      ...acc,
      [cur]: d3.extent([
        ...results.reduce((acc, cur) => [...cur]).map((r) => r[cur]),
      ]) as [number, number],
    }),
    {} as Domains
  );
};

const saveDomains = () => {
  const domains = getDomains();
  const content = `
${warning}
import type { Domains } from './utils.js';

export const domains: Domains = {
${Object.entries(domains).map(([k, v]) => `${k}: [${v.join(', ')}]`)}
}`;

  writeFileSync(join(__dirname, 'domains.ts'), content);
};
