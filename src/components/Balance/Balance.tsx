import { Box, SxProps, Typography } from '@mui/material';
import React from 'react';
import LabeledCurrency from './components/LabeledCurrency/LabeledCurrency';

export type BalanceProps = {
  capital: number;
  balance: number;
  onHold: number;
  currency?: string;
  sx?: SxProps;
};

const Balance: React.FC<BalanceProps> = ({ capital, balance, onHold, currency = 'btc', sx }) => {
  const style = {
    fontSize: 'inherit',
    lineHeight: 'inherit',
  };
  return (
    <Box display={'flex'} justifyContent={'space-between'} columnGap={'1em'} sx={{ ...sx }}>
      <Box display={'flex'} flexDirection={'column'} flexShrink={1} width={'100%'} minWidth={0}>
        <Typography
          component={'h3'}
          variant={'h3'}
          sx={{
            textTransform: 'uppercase',
            color: 'text.secondary',
            fontWeight: 'bold',
            fontSize: 'inherit',
            lineHeight: 1,
            mb: '0.33em',
          }}
        >
          trading capital
        </Typography>
        <Box
          sx={{
            display: 'flex',
            fontSize: '2.8em',
            lineHeight: 1,
          }}
        >
          <Typography component={'span'} variant='h2' sx={style}>
            {capital.toFixed(5)}
          </Typography>
          <Typography component={'span'} variant='h2' sx={style} ml={'0.2em'}>
            {currency.toUpperCase()}
          </Typography>
        </Box>
      </Box>
      <Box alignSelf={'end'} display={'flex'} rowGap={'0.25em'} flexDirection={'column'}>
        <LabeledCurrency label='balance' value={balance} />
        <LabeledCurrency label='on hold' value={onHold} />
      </Box>
    </Box>
  );
};

export default Balance;
