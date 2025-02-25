import { TimeSeriesData } from '@/utils/generateTimeSeries';
import { SxProps, Theme } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import React from 'react';

export type CurrencyChartProps = {
  data: TimeSeriesData;
  color?: string;
  sx?: SxProps;
};

const style: SxProps<Theme> = ({ palette }) => ({
  '& .MuiAreaElement-root': {
    fill: 'url(#myGradient)',
  },
  '& .MuiChartsAxis-tickLabel': {
    fill: palette.text.secondary,
  },
  // ...sx,
});

const CurrencyChart: React.FC<CurrencyChartProps> = ({ data, color, sx }) => {
  return (
    <LineChart
      xAxis={[
        {
          domainLimit: 'strict',
          dataKey: 'time',
          scaleType: 'utc',
          disableTicks: true,
          disableLine: true,
          valueFormatter(value: Date) {
            return value.toLocaleDateString();
          },
        },
      ]}
      dataset={data}
      series={[
        {
          dataKey: 'value',
          area: true,
          color,
        },
      ]}
      slotProps={{ mark: { display: 'none' } }}
      leftAxis={null}
      grid={{ horizontal: true }}
      height={300}
      margin={{ left: 0, right: 0, bottom: 0, top: 0 }}
      sx={style}
    >
      <defs>
        <linearGradient id='myGradient' gradientTransform='rotate(90)'>
          <stop offset='30%' stopColor={color} stopOpacity='50%' />
          <stop offset='100%' stopColor='transparent' />
        </linearGradient>
      </defs>
    </LineChart>
  );
};

export default CurrencyChart;
