import { Box,  SxProps } from '@mui/material';
import React, { ReactNode } from 'react';
import { SpaceInvader2Icon, SpaceInvaderIcon } from '@/components/icons';
import BotButton from './components/BotButton/BotButton';
import { botColors } from '@/const/botColors';
import RadialRenderer, { ItemConfig } from './components/RadialRenderer';
import Streak from './components/Streak';

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
  const degToRad = (angle: number) => (Math.PI / 180) * angle;
  const getGradient = (color1: string, color2: string) =>
    `linear-gradient(to right,${color1} 0%, ${color2} 100%)`;
  const gradientColors = {
    yellow: '#e4972d',
    pink: '#ea4c89',
    violet: '#8983d2',
    green: '#78a659',
  };

  const radius = 35;
  const wrapperConfig: ItemConfig[] = [
    {
      angle: 0,
      radius,
      offset: [0, 1],
      component: (
        <Streak variant='hor' gradient={getGradient(gradientColors.yellow, gradientColors.pink)} />
      ),
    },
    {
      angle: degToRad(-135),
      radius: radius + 20,
      offset: [0, 4],
      component: (
        <Streak variant='lt' gradient={getGradient(gradientColors.yellow, gradientColors.pink)} />
      ),
    },
    {
      angle: degToRad(180),
      radius,
      offset: [0, 1],
      component: (
        <Streak variant='hor' gradient={getGradient(gradientColors.yellow, gradientColors.green)} />
      ),
    },
    {
      angle: degToRad(-45),
      radius: radius + 22,
      offset: [0, 2],
      component: (
        <Streak variant='rt' gradient={getGradient(gradientColors.yellow, gradientColors.violet)} />
      ),
    },
  ];
  return (
    <Box
      sx={{
        fontSize: 45,
        display: 'grid',
        gap: '1px',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gridTemplateRows: 'repeat(2,minmax(0,1fr))',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {bots.map(({ name, title, icon }, idx) => {
        const button = (
          <BotButton
            key={idx}
            onClick={() => onSelect && onSelect(name)}
            selected={value === name}
            icon={icon}
            title={title}
            disabled={!name}
            sx={{
              aspectRatio: 115 / 105,
              width: '100%',
              height: 'auto',
              color: botColors?.[name],
            }}
            profit={profits?.[name]}
          />
        );

        return name === 'yellow_bot' ? (
          <RadialRenderer
            key={idx}
            config={wrapperConfig}
            sx={{
              width: '100%',
              height: 'auto',
            }}
          >
            {button}
          </RadialRenderer>
        ) : (
          button
        );
      })}
    </Box>
  );
};

export default BotSelector;
