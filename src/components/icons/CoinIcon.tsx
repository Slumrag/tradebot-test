import { SvgIcon, SvgIconProps } from '@mui/material';
import Coin from '@/assets/coin.svg?react';

const CoinIcon = (props: SvgIconProps) => (
  <SvgIcon inheritViewBox component={Coin} {...props}></SvgIcon>
);
export default CoinIcon;
