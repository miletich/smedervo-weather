import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = '../public';
const outDir = 'static';

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
