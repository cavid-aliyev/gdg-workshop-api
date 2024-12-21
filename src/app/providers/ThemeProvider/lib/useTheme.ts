import React from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    if (!setTheme) {
      throw new Error("setTheme function is not defined in ThemeContext.");
    }

    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme ?? Theme.LIGHT, toggleTheme };
}
