import React from "react";

import { useTheme } from "@App/providers/ThemeProvider";
import { classNames } from "@Shared/lib/classNames/classNames";
import { AppRouter } from "@App/providers/routes";
import { Navbar } from "@Widgets/Navbar";
import { Sidebar } from "@Widgets/Sidebar";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <React.Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </React.Suspense>
    </div>
  );
};

export default App;
