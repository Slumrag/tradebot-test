import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import BurgerIcon from '@/components/icons/BurgerIcon';
import RefreshIcon from '@/components/icons/RefreshIcon';

const TopBar = () => {
  return (
    <AppBar
      position='static'
      sx={{
        fontSize: 17,
        color: 'text.secondary',
        background: ['radial-gradient(ellipse at 50% 0, rgba(0,106,186,0.3) 0%, transparent 50%)'],
      }}
    >
      <Toolbar sx={{ p: '0 12px', height: 75 }}>
        <IconButton size='small' color='inherit'>
          <BurgerIcon fontSize='inherit' />
        </IconButton>
        <Box flexGrow={1}>
          <Typography component='h1' fontWeight={'bold'} textAlign={'center'} fontSize={'inherit'}>
            Dashboard
          </Typography>
        </Box>
        <IconButton size='small' color='inherit'>
          <RefreshIcon fontSize='inherit' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
