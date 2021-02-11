import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

interface PaletteColor {}
/**
 * Breakpoints example:
 *
 * - theme.breakpoints.up('xl') will apply to screen sizes >= 1441
 *
 * - theme.breakpoints.down('xl') is supposed to apply to screen sizes < 1921,
 * but instead it applies to screen sizes < infinity.
 * The breakpoint at 1921 isn't registered as an upper limit bc
 * 1921 is a custom breakpoint.
 */
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0, // xs ranges from 0 to 425, inclusive
      sm: 426,
      md: 769,
      lg: 1025,
      xl: 1441,
      xxl: 1921,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      light: '#9EDFB5',
      main: '#3dc06c',
      dark: '#1E6036',
      contrastText: '#fff',
    },
<<<<<<< HEAD
    secondary: {
      light: '#63a0cf',
      main: '#3c89c3',
      dark: '#2a5f88',
      contrastText: '#fff',
    },
=======
>>>>>>> Create theme override for primary color
  },
});

export default theme;
