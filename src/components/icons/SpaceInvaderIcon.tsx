import { SvgIcon, SvgIconProps } from '@mui/material';
import SpaceInvader from '@/assets/space-invader.svg?react';

const SpaceInvaderIcon = (props: SvgIconProps) => (
  <SvgIcon inheritViewBox component={SpaceInvader} {...props}></SvgIcon>
);

export default SpaceInvaderIcon;
