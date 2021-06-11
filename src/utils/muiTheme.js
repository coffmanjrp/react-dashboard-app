import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const lightTheme = {
  type: 'light',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    display: grey[100],
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
  background: {
    default: '#fafafa',
    paper: '#fff',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
};

const darkTheme = {
  type: 'dark',
  primary: {
    light: '#d3633a',
    main: '#ff4500',
    dark: '#c23400',
  },
  secondary: {
    light: '#4791db',
    main: '#1976d2',
    dark: '#115293',
  },
  text: {
    primary: grey[300],
    secondary: 'rgba(255, 255, 255, 0.7)',
    display: grey[300],
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  action: {
    active: '#fff',
    hover: 'rgba(255, 255, 255, 0.08',
    selected: 'rgba(255, 255, 255, 0.16)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
  },
  background: {
    default: '#303030',
    paper: '#424242',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
};

const muiTheme = (theme) =>
  createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            overflow: 'hidden',
          },
        },
      },
    },
    palette: theme ? darkTheme : lightTheme,
  });

export default muiTheme;
