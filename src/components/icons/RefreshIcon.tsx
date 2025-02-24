import { SvgIcon, SvgIconProps } from '@mui/material';
import Refresh from '@/assets/refresh.svg?react';

const RefreshIcon = (props: SvgIconProps) => (
  <SvgIcon inheritViewBox component={Refresh} {...props}></SvgIcon>
);

export default RefreshIcon;
