import React, { ButtonHTMLAttributes } from "react";
import { classNames } from "@Shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  suqare?: boolean;
  size?: ButtonSize;
}

export const Button: React.FC<IButtonProps> = props => {
  const { className, children, theme, suqare, size = ButtonSize.M, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: Boolean(suqare),
    [cls[size]]: true,
  };

  const themeClass = theme ? cls[theme] : undefined;

  return (
    <button className={classNames(cls.button, mods, [className, themeClass])} {...otherProps}>
      {children}
    </button>
  );
};
