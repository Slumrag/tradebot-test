import { SvgIcon, SvgIconProps } from '@mui/material';
import Chart from '@/assets/chart.svg?react';

const ChartIcon = (props: SvgIconProps) => (
  <SvgIcon inheritViewBox component={Chart} {...props}></SvgIcon>
);

export default ChartIcon;
