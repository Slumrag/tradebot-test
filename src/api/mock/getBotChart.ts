import { hashCode } from '@/utils/hashCode';
import { TimeRange } from '../types/TimeRange';
import { generateTimeSeries, TimeSeriesData } from '@/utils/generateTimeSeries';

export function getBotChart(bot: string, range: TimeRange = '7d'): Promise<TimeSeriesData> {
  const DAY_IN_MS = 3600 * 1000 * 24;
  const end = Date.now();
  let days = 7;

  switch (range) {
    case '24h':
      days = 1;
      break;
    case '7d':
      days = 7;
      break;
    case '30d':
      days = 30;
      break;
    case 'allTime':
      days = 365;
      break;
  }

  const start = end - DAY_IN_MS * days;

  const time = generateTimeSeries(new Date(start), new Date(end), {
    seed: hashCode(bot + range),
    min: 5,
  });

  return Promise.resolve(time);
}
