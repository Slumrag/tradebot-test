import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Layout from '@/components/Layout';
import { themeOptions } from './config/themeOptions';
import Balance from './components/Balance';
import CurrencyChart from './components/CurrencyChart';
import { useEffect, useState } from 'react';
import { mockData } from './api/mockData';
import { TradingData } from './api/TradingData';
import { generateTimeSeries, type TimeSeriesData } from './utils/generateTimeSeries';

function App() {
  const [tradingData, setTradingData] = useState<TradingData>();
  const [timeSeries, setTimeSeries] = useState<TimeSeriesData>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await mockData();
      setTradingData(data);
      const time = generateTimeSeries(new Date(), new Date('2026'));
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
          <CurrencyChart data={timeSeries} color={'#0082e8'} />
          <Box flex={1}></Box>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
