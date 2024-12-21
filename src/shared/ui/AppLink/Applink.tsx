import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@Shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<IAppLinkProps> = props => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
