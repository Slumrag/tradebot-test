import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',

    // primary: {
    //   main: '#FFFFFF',
    // },

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
