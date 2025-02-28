import { TimeRange } from '@/api/types/TimeRange';
import { Chip, Stack, SxProps, Typography } from '@mui/material';
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
    <Stack
      direction={'row'}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.5em',
        ...sx,
      }}
    >
      <Typography
        component='h3'
        variant='h3'
        fontWeight={'bold'}
        color='text.secondary'
        fontSize={'inherit'}
        textTransform={'capitalize'}
      >
        Time range:
      </Typography>
      <Stack
        direction={'row'}
        columnGap={'0.83em'}
        sx={{
          flex: 1,
        }}
      >
        {chips.map((el, idx) => (
          <Chip
            key={idx}
            label={el.label}
            onClick={() => onClick && onClick(el.value)}
            variant='outlined'
            className={el.value === value ? 'selected' : ''}
            sx={{
              fontSize: 'inherit',
              maxWidth: 60,
              width: '100%',
              maxHeight: '2em',
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
    </Stack>
  );
};

export default TimeRangeSelector;
