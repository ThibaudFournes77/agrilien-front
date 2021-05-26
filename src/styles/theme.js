import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#289e24',
    },
    secondary: {
      main: '#d4b128',
    },
  },
  gutter: {
    normal: '1rem',
    big: '2rem',
    small: '0.2rem',
  },
});

export default theme;
