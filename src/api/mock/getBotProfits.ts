import data from '@/data/data.min.json';
import { TimeRange } from '../types/TimeRange';

export function getBotProfits(range: TimeRange = '7d'): Promise<Record<string, number>> {
  const profits = data.bots.reduce((acc, bot) => ({ ...acc, [bot.name]: bot[range] }), {});
  return Promise.resolve(profits);
}
