import { TimeSeriesData } from '@/utils/generateTimeSeries';
import { Box, SxProps, Theme, useTheme } from '@mui/material';
import {  chartsGridClasses, LineChart, lineElementClasses } from '@mui/x-charts';
import React, { ReactNode } from 'react';
import { TimeRange } from '@/api/types/TimeRange';

export type CurrencyChartProps = {
  data: TimeSeriesData;
  color?: string;
  timeRange?: TimeRange;
  textOverlay?: ReactNode;
  sx?: SxProps;
  chartSx?: SxProps;
};

const CurrencyChart: React.FC<CurrencyChartProps> = ({
  data,
  color,
  timeRange = '7d',
  textOverlay,
  sx,
  chartSx,
}) => {
  const theme = useTheme();
  const style: SxProps<Theme> = [
    {
      [`& .${lineElementClasses.root}`]: {
        strokeWidth: 1,
      },
      '& .MuiAreaElement-root': {
        fill: 'url(#myGradient)',
      },
      [`& .${chartsGridClasses.horizontalLine}`]: {
        strokeWidth: '0.5',
        stroke: '#1c2e45',
      },
      [`& .${chartsGridClasses.verticalLine}`]: {
        strokeDasharray: '1 1',
        stroke: '#004f88',
        strokeOpacity: '0.5',
      },
    },
    ...(Array.isArray(chartSx) ? chartSx : [chartSx]),
  ];

  const axisConfig = (timeRange: TimeRange) => {
    switch (timeRange) {
      case '24h':
        return {
          valueFormatter(value: Date) {
            return value.toLocaleTimeString().slice(0, -3);
          },
        };
      case '7d':
        return {
          valueFormatter(value: Date) {
            return value.toLocaleDateString().slice(0, -5);
          },
        };
      case '30d':
        return {
          valueFormatter(value: Date) {
            return value.toLocaleDateString().slice(0, -5);
          },
        };
      case 'all_time':
        return {
          valueFormatter(value: Date) {
            return value.toLocaleDateString();
          },
        };
    }
  };

  return (
    <Box position={'relative'} sx={sx}>
      {textOverlay && (
        <Box
          position={'absolute'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
          top={0}
          lineHeight={1}
          zIndex={1000}
          bottom={0}
        >
          {textOverlay}
        </Box>
      )}
      <LineChart
        xAxis={[
          {
            domainLimit: 'strict',
            dataKey: 'time',
            scaleType: 'utc',
            disableTicks: true,
            disableLine: true,
            tickNumber: 5,
            tickLabelPlacement: 'middle',
            tickLabelStyle: {
              fill: theme.palette.text.secondary,
              fontSize: 10,
              baselineShift: '-10px',
            },
            ...axisConfig(timeRange),
          },
        ]}
        yAxis={[{ tickNumber: 8 }]}
        dataset={data}
        series={[
          {
            dataKey: 'value',
            area: true,
            showMark: false,
            disableHighlight: true,
            color,
          },
        ]}
        leftAxis={null}
        grid={{ horizontal: true, vertical: true }}
        margin={{ left: 0, right: 0, bottom: 24, top: 8 }}
        sx={style}
      >
        <defs>
          <linearGradient id='myGradient' gradientTransform='rotate(90)'>
            <stop offset='0%' stopColor={color} stopOpacity='45%' />
            <stop offset='88%' stopColor={color} stopOpacity='1%' />
            <stop offset='100%' stopColor='transparent' />
          </linearGradient>
        </defs>
      </LineChart>
    </Box>
  );
};

export default CurrencyChart;
