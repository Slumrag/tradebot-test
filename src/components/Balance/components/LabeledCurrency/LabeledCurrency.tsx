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
      columnGap={'6px'}
      lineHeight={1}
    >
      <Typography
        component='h3'
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
      <CurrencyIcon color='inherit' sx={{ fontSize: 15 }} />
    </Box>
  );
};
export default LabeledCurrency;
