import React from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

export interface IThemeProps {
  children: React.ReactNode;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: React.FC<IThemeProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const defaultProps = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );
  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
