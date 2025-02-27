import { TimeRange } from '@/api/types/TimeRange';
import { Box, Chip, Stack, SxProps, Typography } from '@mui/material';
import React from 'react';

export type TimeRangeSelectorProps = {
  value?: TimeRange;
  onClick?: (value: TimeRange) => void;
  sx?: SxProps;
};

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ value, onClick, sx }) => {
  const chips: { label: string; value: TimeRange }[] = [
    { label: '24h', value: '24h' },
    { label: '7 days', value: '7d' },
    { label: '30 days', value: '30d' },
    { label: 'All time', value: 'all_time' },
  ];
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} sx={sx}>
      <Typography component='h3' fontWeight={'bold'} color='text.secondary' fontSize={'inherit'}>
        Time range:
      </Typography>
      <Stack direction={'row'} columnGap={'10px'}>
        {chips.map((el, idx) => (
          <Chip
            key={idx}
            label={el.label}
            onClick={() => onClick && onClick(el.value)}
            variant='outlined'
            className={el.value === value ? 'selected' : ''}
            sx={{
              fontSize: 'inherit',
              width: 60,
              height: 25,
              color: 'text.secondary',
              borderColor: '#273246',
              '& .MuiChip-label': {
                p: 0,
              },
              '&.selected': {
                color: 'text.primary',
                fontWeight: 'bold',
                borderColor: 'rgba(255,255,255,0.5)',
              },
            }}
          ></Chip>
        ))}
      </Stack>
    </Box>
  );
};

export default TimeRangeSelector;
