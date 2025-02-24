import { SvgIcon, SvgIconProps } from '@mui/material';
import Burger from '@/assets/burger.svg?react';

const BurgerIcon = (props: SvgIconProps) => (
  <SvgIcon inheritViewBox component={Burger} {...props}></SvgIcon>
);

export default BurgerIcon;
