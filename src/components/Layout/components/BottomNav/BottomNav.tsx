import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';
import DashboardIcon from '@/components/icons/DashboardIcon';
import ChartIcon from '@/components/icons/ChartIcon';
import CartIcon from '@/components/icons/CartIcon';
import CoinIcon from '@/components/icons/CoinIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';

const BottomNav = () => {
  const [selected, setSelected] = useState(0);
  return (
    <BottomNavigation
      showLabels
      value={selected}
      sx={{
        '& .Mui-selected': {
          color: '#ffffff',
          fontSize: '0.75rem',
        },
      }}
      onChange={(_, v) => setSelected(v)}
    >
      <BottomNavigationAction label='Dashboard' icon={<DashboardIcon />} />
      <BottomNavigationAction label='Megabot' icon={<ChartIcon />} />
      <BottomNavigationAction label='Bot market' icon={<CartIcon />} />
      <BottomNavigationAction label='Coin prices' icon={<CoinIcon />} />
      <BottomNavigationAction label='Profile' icon={<SettingsIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
