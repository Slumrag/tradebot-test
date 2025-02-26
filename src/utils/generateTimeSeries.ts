import { splitmix32 } from './splitmix32';

export type TimeSeriesData = Array<{
  time: Date;
  value: number;
}>;

type GeneratorOptions = {
  count?: number;
  seed?: number;
  min?: number;
  max?: number;
};

export function generateTimeSeries(
  start: Date,
  end: Date,
  options?: GeneratorOptions
): TimeSeriesData {
  const { count, min, max, seed }: GeneratorOptions = {
    count: 50,
    min: 0,
    max: 10,
    seed: 0,
    ...options,
  };

  const step = (end.getTime() - start.getTime()) / count;
  const res = [];
  const random = splitmix32(seed);

  for (let index = 0; index < count; index++) {
    const value = (max - min) * random() + min;
    const time = new Date(start.getTime() + index * step);

    res.push({ time, value });
  }

  return res;
}
