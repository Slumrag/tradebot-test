import { SvgIcon, SvgIconProps } from '@mui/material';
import Dashboard from '@/assets/dashboard.svg?react';

const DashboardIcon = (props: SvgIconProps) => (
  <SvgIcon inheritViewBox component={Dashboard} {...props}></SvgIcon>
);

export default DashboardIcon;
