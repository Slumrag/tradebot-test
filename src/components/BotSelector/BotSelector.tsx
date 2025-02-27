import { Grid2, SxProps } from '@mui/material';
import React, { ReactNode } from 'react';
import { SpaceInvader2Icon, SpaceInvaderIcon } from '@/components/icons';
import BotButton from './components/BotButton/BotButton';
import { botColors } from './components/BotButton/botColors';

export type BotSelectorProps = {
  onSelect?: (botName: string) => void;
  value?: string;
  profits?: Record<string, number>;
  sx?: SxProps;
};

const BotSelector: React.FC<BotSelectorProps> = ({ value, onSelect, profits, sx }) => {
  const bots: { name: string; title: string; icon: ReactNode }[] = [
    { name: 'orange_bot', title: 'attack', icon: <SpaceInvaderIcon fontSize={'inherit'} /> },
    {
      name: '',
      title: 'place bot here',
      icon: (
        <SpaceInvaderIcon
          fontSize={'inherit'}
          sx={({ palette }) => ({ fill: palette.background.paper, '& g': { filter: 'none' } })}
        />
      ),
    },
    { name: 'blue_bot', title: 'balance', icon: <SpaceInvaderIcon fontSize={'inherit'} /> },
    { name: 'green_bot', title: 'defense', icon: <SpaceInvaderIcon fontSize={'inherit'} /> },
    { name: 'yellow_bot', title: 'megabot', icon: <SpaceInvader2Icon fontSize={'inherit'} /> },
    { name: 'red_bot', title: 'attack', icon: <SpaceInvaderIcon fontSize={'inherit'} /> },
  ];

  return (
    <Grid2 container spacing={'1px'} fontSize={45} sx={sx}>
      {bots.map(({ name, title, icon }, idx) => (
        <Grid2 key={idx}>
          <BotButton
            onClick={() => onSelect && onSelect(name)}
            selected={value === name}
            icon={icon}
            title={title}
            disabled={!name}
            sx={{
              color: botColors?.[name],
            }}
            profit={profits?.[name]}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default BotSelector;
