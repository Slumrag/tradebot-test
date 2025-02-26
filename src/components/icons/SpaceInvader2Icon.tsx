import { SvgIcon, SvgIconProps } from '@mui/material';
import SpaceInvader2 from '@/assets/space-invader2.svg?react';

const SpaceInvader2Icon = (props: SvgIconProps) => (
  <SvgIcon inheritViewBox component={SpaceInvader2} {...props}></SvgIcon>
);

export default SpaceInvader2Icon;
