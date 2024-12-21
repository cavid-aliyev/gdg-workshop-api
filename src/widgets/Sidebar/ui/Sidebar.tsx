import React from "react";
import { classNames } from "@Shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@Shared/ui/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "@Shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "@Shared/ui/AppLink/Applink";
import { RoutePath } from "@Shared/config/rootConfig/routeConfig";
import AboutIcon from "@Shared/assets/icons/Docs";
import MainIcon from "@Shared/assets/icons/Home";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
  const { className } = props;

  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        suqare
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <div className={cls.item}>
          <MainIcon className={cls.icon} />
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.link}>
            <span>Main</span>
          </AppLink>
        </div>

        <div className={cls.item}>
          <AboutIcon className={cls.icon} />
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.link}>
            <span>About</span>
          </AppLink>
        </div>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
