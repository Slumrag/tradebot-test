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
    background: {
      default: '#1d2637',
      paper: '#1d2637',
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
          background: '#232c3e',
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
