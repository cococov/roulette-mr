import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#333842',
      main: '#616671',
      dark: '#1D2026',
      contrastText: '#E8F3F8',
    },
    secondary: {
      light: '#FF5C53',
      main: '#D42029',
      dark: '#9A0000',
      contrastText: '#E8F3F8',
    },
    background: {
      light: '#333842',
      main: '#282C34',
      table: '#424242',
    },
  },
  drawerWidth: 240,
  appbarWidth: 64,
});

export default theme;