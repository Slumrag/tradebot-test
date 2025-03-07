import { Badge, BottomNavigation, BottomNavigationAction, SxProps, Theme } from '@mui/material';
import { useState } from 'react';
import DashboardIcon from '@/components/icons/DashboardIcon';
import ChartIcon from '@/components/icons/ChartIcon';
import CartIcon from '@/components/icons/CartIcon';
import CoinIcon from '@/components/icons/CoinIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';

const style: SxProps<Theme> = (theme) => ({
  '& .MuiBottomNavigationAction-root': {
    minWidth: 50,
    p: '0 6px',
    fontSize: 22,
  },
  '& .MuiBottomNavigationAction-label': {
    fontSize: theme.typography.fontSize * 0.75,
    position: 'relative',
    top: 5,
  },
  '& .MuiBottomNavigationAction-label.Mui-selected': {
    fontSize: theme.typography.fontSize * 0.75,
  },
  '& .MuiBottomNavigationAction-root.Mui-selected': {
    color: '#ffffff',
  },
});

const BottomNav = () => {
  const [selected, setSelected] = useState(0);
  return (
    <BottomNavigation showLabels value={selected} sx={style} onChange={(_, v) => setSelected(v)}>
      <BottomNavigationAction label='Dashboard' icon={<DashboardIcon fontSize='inherit' />} />
      <BottomNavigationAction label='Megabot' icon={<ChartIcon fontSize='inherit' />} />
      <BottomNavigationAction label='Bot market' icon={<CartIcon fontSize='inherit' />} />
      <BottomNavigationAction label='Coin prices' icon={<CoinIcon fontSize='inherit' />} />
      <BottomNavigationAction
        label='Profile'
        icon={
          <Badge
            badgeContent={3}
            color='warning'
            sx={(theme) => ({
              '& .MuiBadge-anchorOriginTopRight': {
                right: -2,
                top: -2,
              },
              '& .MuiBadge-badge': {
                height: 18,
                minWidth: 18,
                p: 0,
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.text.primary,
              },
            })}
          >
            <SettingsIcon fontSize='inherit' />
          </Badge>
        }
      />
    </BottomNavigation>
  );
};

export default BottomNav;
