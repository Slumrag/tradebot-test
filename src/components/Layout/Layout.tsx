import React, { PropsWithChildren } from 'react';
import BottomNav from './components/BottomNav/BottomNav';
import TopBar from './components/TopBar/TopBar';
import { Paper } from '@mui/material';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Paper sx={{ borderRadius: 0 }}>
      <TopBar></TopBar>
      {children}
      <BottomNav></BottomNav>
    </Paper>
  );
};

export default Layout;
