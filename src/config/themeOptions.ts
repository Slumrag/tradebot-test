import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',

    warning: {
      main: '#e4972d',
    },
    text: {
      secondary: '#546076',
    },
    success: {
      main: '#78a659',
    },
    error: {
      main: '#f2427e',
    },
    background: {
      default: '#1d2637',
      paper: '#112135',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          background: '#18283c',
          height: 50,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});
