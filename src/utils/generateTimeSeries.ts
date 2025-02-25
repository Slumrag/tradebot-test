export type TimeSeriesData = Array<{
  time: Date;
  value: number;
}>;

export function generateTimeSeries(
  start: Date,
  end: Date,
  count = 50,
  min = 0,
  max = 10
): TimeSeriesData {
  const step = (end.getTime() - start.getTime()) / count;
  const res = [];

  for (let index = 0; index < count; index++) {
    const value = (max - min) * Math.random() - min;
    const time = new Date(start.getTime() + index * step);

    res.push({ time, value });
  }

  return res;
}
