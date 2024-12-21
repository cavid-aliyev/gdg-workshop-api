import React from "react";
import { classNames } from "@Shared/lib/classNames/classNames";
import cls from "./PageLoader.module.scss";

interface IPageLoader {
  className?: string;
}

export const PageLoader: React.FC<IPageLoader> = ({ className }) => {
  return <div className={classNames(cls.pageLoader, {}, [className])}>Loadingggg</div>;
};
