import { Box, SxProps } from '@mui/material';
import React, { PropsWithChildren, ReactNode } from 'react';

export type ItemConfig = {
  angle?: number;
  radius?: number;
  offset?: [number, number];
  component?: ReactNode;
};

export type StreakWrapperProps = PropsWithChildren & {
  config?: ItemConfig[];
  sx?: SxProps;
};

const RadialRenderer: React.FC<StreakWrapperProps> = ({ config, sx, children }) => {
  //x = r cos θ , y = r sin θ
  return (
    <Box
      position={'relative'}
      display='flex'
      component={'span'}
      sx={{
        ...sx,
      }}
    >
      {config?.length &&
        config.map(({ radius = 0, angle = 0, offset = [0, 0], component }, idx) => {
          const width = 50;
          const height = 10;
          const dx = radius * Math.cos(angle) + offset[0];
          const dy = radius * Math.sin(angle) + offset[1];
          return (
            <Box
              key={idx}
              width={width}
              height={height}
              sx={{
                display: 'flex',
                position: 'absolute',
                zIndex: 1,
                top: `calc(50% - ${height / 2}px)`,
                left: '50%',
                transformOrigin: '0 50%',
                transform: `translate(${dx}px,${dy}px) rotate(${angle}rad)`,
              }}
            >
              {component}
            </Box>
          );
        })}

      {children}
    </Box>
  );
};

export default RadialRenderer;
