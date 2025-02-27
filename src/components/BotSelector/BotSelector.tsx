import { Grid2 } from '@mui/material';
import React from 'react';
import { SpaceInvader2Icon, SpaceInvaderIcon } from '@/components/icons';
import BotButton from './components/BotButton/BotButton';
import { botColors } from './components/BotButton/botColors';

export type BotSelectorProps = {
  onSelect?: (botName: string) => void;
  value?: string;
};

const BotSelector: React.FC<BotSelectorProps> = ({ value, onSelect }) => {
  return (
    <Grid2 container spacing={'1px'} sx={{ p: '0 14px' }} fontSize={45}>
      <Grid2>
        <BotButton
          onClick={() => onSelect && onSelect('orange_bot')}
          selected={value === 'orange_bot'}
          icon={<SpaceInvaderIcon fontSize={'inherit'} sx={{ fill: botColors['orange_bot'] }} />}
          title={'attack'}
          profit={-8.3}
        />
      </Grid2>
      <Grid2>
        <BotButton
          icon={
            <SpaceInvaderIcon
              fontSize={'inherit'}
              sx={({ palette }) => ({ fill: palette.background.paper, '& g': { filter: 'none' } })}
            />
          }
          title={'place bot here'}
          sx={{ color: 'text.secondary' }}
        />
      </Grid2>
      <Grid2>
        <BotButton
          onClick={() => onSelect && onSelect('blue_bot')}
          selected={value === 'blue_bot'}
          icon={<SpaceInvaderIcon fontSize={'inherit'} sx={{ fill: botColors['blue_bot'] }} />}
          title={'balance'}
          profit={-8.3}
        />
      </Grid2>
      <Grid2>
        <BotButton
          onClick={() => onSelect && onSelect('green_bot')}
          selected={value === 'green_bot'}
          icon={<SpaceInvaderIcon fontSize={'inherit'} sx={{ fill: botColors['green_bot'] }} />}
          title={'defense'}
          profit={2.3}
        />
      </Grid2>
      <Grid2>
        <BotButton
          onClick={() => onSelect && onSelect('yellow_bot')}
          selected={value === 'yellow_bot'}
          icon={<SpaceInvader2Icon fontSize={'inherit'} sx={{ fill: botColors['yellow_bot'] }} />}
          title={'megabot'}
          profit={8.3}
        />
      </Grid2>
      <Grid2>
        <BotButton
          onClick={() => onSelect && onSelect('red_bot')}
          selected={value === 'red_bot'}
          icon={<SpaceInvaderIcon fontSize={'inherit'} sx={{ fill: botColors['red_bot'] }} />}
          title={'attack'}
          profit={-8.3}
        />
      </Grid2>
    </Grid2>
  );
};

export default BotSelector;
