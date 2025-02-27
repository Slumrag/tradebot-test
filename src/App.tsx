import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import Layout from '@/components/Layout';
import { themeOptions } from './config/themeOptions';
import Balance from './components/Balance';
import CurrencyChart from './components/CurrencyChart';
import { useEffect, useState } from 'react';
import { getTradingData } from './api/mock/getTradingData';
import { TradingData } from './api/types/TradingData';
import { type TimeSeriesData } from './utils/generateTimeSeries';
import { getBotChart } from './api/mock/getBotChart';
import { TimeRange } from './api/types/TimeRange';
import BotSelector from './components/BotSelector';
import TimeRangeSelector from './components/TimeRangeSelector';

function App() {
  const [tradingData, setTradingData] = useState<TradingData>();
  const [timeSeries, setTimeSeries] = useState<TimeSeriesData>([]);
  const [bot, setBot] = useState('red_bot');
  const [timeRange, setTimeRange] = useState<TimeRange>('all_time');
  const [profits, setProfits] = useState({});

  const handleBotSelect = (bot: string) => {
    setBot(bot);
  };
  const handleTimeRangeSelect = (time: TimeRange) => {
    setTimeRange(time);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTradingData();
      setTradingData(data);
      const time = await getBotChart(bot, timeRange);
      setTimeSeries(time);
    };
    fetchData();
  }, []);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={themeOptions}>
        <Layout>
          <Balance capital={1.00865} balance={10850} onHold={24000}></Balance>
          <CurrencyChart
            data={timeSeries}
            color={'#0082e8'}
            timeRange={timeRange}
            sx={{ height: 192 }}
            textOverlay={
              <Typography color='success.main' fontSize={23} lineHeight={'inherit'}>
                +32.25%
              </Typography>
            }
          />
          <BotSelector value={bot} onSelect={handleBotSelect} />
          <TimeRangeSelector
            value={timeRange}
            onClick={handleTimeRangeSelect}
            sx={{ p: '0 16px', fontSize: 12 }}
          />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
