import React from "react";
import { classNames } from "@Shared/lib/classNames/classNames";
import { Theme, useTheme } from "@App/providers/ThemeProvider";
import LightIcon from "@Shared/assets/icons/ThemeLight";
import DarkIcon from "@Shared/assets/icons/ThemeDark";
import { Button, ButtonTheme } from "@Shared/ui/Button/Button";

import cls from "./ThemeSwitcher.module.scss";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
