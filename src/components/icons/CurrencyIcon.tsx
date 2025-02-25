import { SvgIcon, SvgIconProps } from '@mui/material';
import Currency from '@/assets/currency.svg?react';

const CurrencyIcon = (props: SvgIconProps) => (
  <SvgIcon inheritViewBox component={Currency} {...props}></SvgIcon>
);

export default CurrencyIcon;
