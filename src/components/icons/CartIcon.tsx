import { SvgIcon, SvgIconProps } from '@mui/material';
import Cart from '@/assets/cart.svg?react';

const CartIcon = (props: SvgIconProps) => (
  <SvgIcon inheritViewBox component={Cart} {...props}></SvgIcon>
);

export default CartIcon;
