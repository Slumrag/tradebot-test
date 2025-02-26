import data from '@/data/data.min.json';
import { TradingData } from '../types/TradingData';

export function getTradingData(): Promise<TradingData> {
  return Promise.resolve(data);
}
