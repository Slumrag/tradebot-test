import { SvgIcon, SvgIconProps } from '@mui/material';
import Settings from '@/assets/settings.svg?react';

const SettingsIcon = (props: SvgIconProps) => (
  <SvgIcon inheritViewBox component={Settings} {...props}></SvgIcon>
);

export default SettingsIcon;
