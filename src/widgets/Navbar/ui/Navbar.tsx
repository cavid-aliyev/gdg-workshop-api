import React from "react";
import { classNames } from "@Shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Button, ButtonTheme } from "@Shared/ui/Button/Button";

interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} className={cls.links}>
        Login
      </Button>
    </div>
  );
};
