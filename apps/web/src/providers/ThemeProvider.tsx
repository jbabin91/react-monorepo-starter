import { webTheme } from '@jbabin91/web-theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MuiThemeProvider theme={webTheme}>{children}</MuiThemeProvider>;
}
