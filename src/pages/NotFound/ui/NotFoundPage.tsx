import React from "react";
import { classNames } from "@Shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";

interface INotFound {
  className?: string;
}

export const NotFoundPage: React.FC<INotFound> = ({ className }) => {
  return <div className={classNames(cls.notFound, {}, [className])}>Page Not Found</div>;
};
