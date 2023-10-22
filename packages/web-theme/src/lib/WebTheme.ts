import { lime, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export function WebThemeTestFunction(): string {
  return 'web-theme';
}

export const webTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
  palette: {
    primary: lime,
    secondary: purple,
  },
});
