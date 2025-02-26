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

function App() {
  const [tradingData, setTradingData] = useState<TradingData>();
  const [timeSeries, setTimeSeries] = useState<TimeSeriesData>([]);
  const [bot, setBot] = useState('bot');
  const [timeRange, setTimeRange] = useState<TimeRange>('allTime');

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
          {/* <Box flex={1}></Box> */}
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
