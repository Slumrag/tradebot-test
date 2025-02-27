import { Button, ButtonProps, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

export type BotButtonProps = ButtonProps & {
  selected?: boolean;
  title?: ReactNode;
  icon?: ReactNode;
  profit?: number;
};

const BotButton: React.FC<BotButtonProps> = ({
  icon,
  title,
  profit,
  sx,
  selected = false,
  ...props
}) => {
  return (
    <Button
      variant='contained'
      color='inherit'
      disableElevation
      className={selected ? 'selected' : ''}
      sx={{
        fontSize: 'inherit',
        backgroundColor: '#1b293e',
        boxShadow: 'none',
        flexDirection: 'column',
        height: 105,
        width: 115,
        '&.selected, &:active': {
          boxShadow: 'inset 0px 0px 30px -15px #207bd7',
        },
        ...sx,
      }}
      {...props}
    >
      {icon}
      <Typography
        component={'span'}
        fontWeight='bold'
        textTransform={'uppercase'}
        fontSize={'10px'}
      >
        {title}
      </Typography>
      {profit !== undefined && (
        <Typography
          component={'span'}
          fontSize={'10px'}
          fontWeight='bold'
          textTransform={'uppercase'}
          color={profit! < 0 ? 'error' : 'success'}
        >
          {profit! > 0 ? '+' : ''}
          {profit?.toFixed(2)}%
        </Typography>
      )}
    </Button>
  );
};

export default BotButton;
