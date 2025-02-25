import React, { PropsWithChildren } from 'react';
import BottomNav from './components/BottomNav/BottomNav';
import TopBar from './components/TopBar/TopBar';
import { Box, Paper } from '@mui/material';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Paper
      square
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <TopBar></TopBar>
      <Box flex={1} component='main' display={'flex'} flexDirection={'column'} gap={2}>
        {children}
      </Box>
      <BottomNav></BottomNav>
    </Paper>
  );
};

export default Layout;
