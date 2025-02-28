import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import Layout from '@/components/Layout';
import { themeOptions } from './config/themeOptions';
import Balance from './components/Balance';
import CurrencyChart from './components/CurrencyChart';
import { useEffect, useState } from 'react';
import { type TimeSeriesData } from './utils/generateTimeSeries';
import { getBotChart } from './api/mock/getBotChart';
import { TimeRange } from './api/types/TimeRange';
import BotSelector from './components/BotSelector';
import TimeRangeSelector from './components/TimeRangeSelector';
import { getBotProfits } from './api/mock/getBotProfits';

function App() {
  const [timeSeries, setTimeSeries] = useState<TimeSeriesData>([]);
  const [bot, setBot] = useState<string>();
  const [timeRange, setTimeRange] = useState<TimeRange>();
  const [profits, setProfits] = useState({});
  const accountData = {
    capital: 1.00865,
    balance: 10850,
    onHold: 24000,
  };
  const handleBotSelect = (bot: string) => {
    setBot(bot);
  };
  const handleTimeRangeSelect = (time: TimeRange) => {
    setTimeRange(time);
  };

  useEffect(() => {
    const storedRange = localStorage.getItem('timeRange');
    if (storedRange === null) {
      localStorage.setItem('timeRange', 'all_time');
      setTimeRange('all_time');
    } else {
      setTimeRange(storedRange as TimeRange);
    }

    const storedBot = localStorage.getItem('bot');
    if (storedBot === null) {
      localStorage.setItem('bot', 'red_bot');
      setBot('red_bot');
    } else {
      setBot(storedBot);
    }
  }, []);

  useEffect(() => {
    if (timeRange) {
      localStorage.setItem('timeRange', timeRange);
    }
    const fetchData = async () => {
      const profits = await getBotProfits(timeRange);
      setProfits(profits);
    };
    fetchData();
  }, [timeRange]);

  useEffect(() => {
    if (bot) {
      localStorage.setItem('bot', bot);
    }
  }, [bot]);

  useEffect(() => {
    if (!bot) {
      return;
    }
    const fetchData = async () => {
      const time = await getBotChart(bot, timeRange);
      setTimeSeries(time);
    };
    fetchData();
  }, [timeRange, bot]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={themeOptions}>
        <Layout>
          <Balance
            capital={accountData.capital}
            balance={accountData.balance}
            onHold={accountData.onHold}
            sx={{
              p: '0 12px',
              fontSize: 12,
              '@media (max-width:375px)': {
                fontSize: 11,
              },
              '@media (max-width:340px)': {
                fontSize: 9,
              },
            }}
          />
          <CurrencyChart
            data={timeSeries}
            color={'#0082e8'}
            timeRange={timeRange}
            sx={{ flex: '1 0 192px', minHeight: 192 }}
            textOverlay={
              <Typography
                color='success.main'
                variant='caption'
                fontSize={23}
                lineHeight={'inherit'}
              >
                +32.6%
              </Typography>
            }
          />
          <BotSelector
            value={bot}
            onSelect={handleBotSelect}
            profits={profits}
            sx={{ p: '0 14px' }}
          />
          <TimeRangeSelector
            value={timeRange}
            onClick={handleTimeRangeSelect}
            sx={{
              p: '0 16px',
              fontSize: 12,
              '@media (max-width:375px)': {
                fontSize: 11,
              },
              '@media (max-width:340px)': {
                fontSize: 9,
              },
            }}
          />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
