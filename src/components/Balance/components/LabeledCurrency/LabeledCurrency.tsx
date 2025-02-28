import { Box, Typography } from '@mui/material';
import { CurrencyIcon } from '@/components/icons';

export type LabeledCurrencyProps = {
  value: number;
  label: string;
};

const LabeledCurrency: React.FC<LabeledCurrencyProps> = ({ value, label }) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      color='text.secondary'
      alignItems={'center'}
      columnGap={'0.5em'}
      lineHeight={1}
    >
      <Typography
        component='h3'
        variant='h3'
        textTransform={'uppercase'}
        fontWeight={'bold'}
        fontSize={'inherit'}
        lineHeight={'inherit'}
      >
        {label}:
      </Typography>
      <Typography
        flex={1}
        fontSize={'inherit'}
        fontWeight={'bold'}
        textAlign={'end'}
        lineHeight={'inherit'}
        color='textPrimary'
      >
        {value.toLocaleString('ru-RU')}
      </Typography>
      <CurrencyIcon color='inherit' sx={{ fontSize: '1.25em', overflow: 'visible' }} />
    </Box>
  );
};
export default LabeledCurrency;
