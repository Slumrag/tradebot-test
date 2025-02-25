import data from '@/mock/data.min.json';
import { TradingData } from './TradingData';

export function mockData(): Promise<TradingData> {
  return Promise.resolve(data);
}
