import path from 'path';
import { readFile } from 'fs/promises';
import * as d3 from 'd3';

import {
  type Datum,
  dataSchema,
  tempMaxAccessor,
  tempMinAccessor,
} from './data';
import type { AnyScale } from './genScales';
import { getScales } from './scalesServer';
import { dimensions } from './consts';

type GetData = () => Promise<Datum[]>;
export const getData: GetData = async () => {
  const csv = (
    await readFile(path.join('./public', 'sd-weather-2020.csv'))
  ).toString();
  const raw = await d3.csvParse(csv);

  return dataSchema.parse(raw);
};

export type VoronoiCellProps = {
  d: string;
  datum: Datum;
  center: [number, number];
};
type GetVoronoiCellProps = () => Promise<VoronoiCellProps[]>;
export const getVoronoiCellProps: GetVoronoiCellProps = async () => {
  const data = await getData();
  const { xScale, yScale } = await getScales();

  const delaunay = d3.Delaunay.from(
    data,
    (d) => xScale(tempMinAccessor(d)),
    (d) => yScale(tempMaxAccessor(d))
  );

  const voronoi = delaunay.voronoi();
  voronoi.xmax = dimensions.innerWidth;
  voronoi.ymax = dimensions.innerHeight;

  return data.map((datum, i) => ({
    d: voronoi.renderCell(i),
    datum,
    center: [xScale(tempMinAccessor(datum)), yScale(tempMaxAccessor(datum))],
  }));
};
