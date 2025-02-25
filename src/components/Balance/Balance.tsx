import { Box, Typography } from '@mui/material';
import React from 'react';
import LabeledCurrency from './components/LabeledCurrency/LabeledCurrency';

type BalanceProps = {
  capital: number;
  balance: number;
  onHold: number;
  currency?: string;
};

const Balance: React.FC<BalanceProps> = ({ capital, balance, onHold, currency = 'btc' }) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} fontSize={12} sx={{ p: '0 12px' }}>
      <Box>
        <Typography
          component={'h3'}
          textTransform={'uppercase'}
          color='textSecondary'
          fontWeight={'bold'}
          fontSize={'inherit'}
          lineHeight={1}
        >
          trading capital
        </Typography>
        <Typography fontSize={34} lineHeight={1} mt={'4px'}>
          {capital} {currency.toUpperCase()}
        </Typography>
      </Box>
      <Box alignSelf={'end'} display={'flex'} rowGap={'3px'} flexDirection={'column'}>
        <LabeledCurrency label='balance' value={balance} />
        <LabeledCurrency label='on hold' value={onHold} />
      </Box>
    </Box>
  );
};

export default Balance;
