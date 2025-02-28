import React from 'react';
import streakLt from '@/assets/streak-lt.png';
import streakR from '@/assets/streak-r.png';
import streakRt from '@/assets/streak-rt.png';

import { Box, BoxProps } from '@mui/material';
export type StreakProps = BoxProps & { gradient?: string; variant?: 'hor' | 'lt' | 'rt' };

const Streak: React.FC<StreakProps> = ({ gradient, variant = 'hor', sx, ...props }) => {
  let streak;
  switch (variant) {
    case 'lt':
      streak = streakLt;
      break;
    case 'hor':
      streak = streakR;
      break;
    case 'rt':
      streak = streakRt;
      break;
  }
  return (
    <Box
      className={'streak'}
      component='span'
      width={50}
      height={10}
      sx={{
        background: gradient ? gradient : 'white',
        maskImage: `url(${streak})`,
        maskSize: '100%',
        maskRepeat: 'no-repeat',
        ...sx,
      }}
      {...props}
    ></Box>
  );
};

export default Streak;
