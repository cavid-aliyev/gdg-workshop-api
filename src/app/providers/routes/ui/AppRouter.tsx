import React from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import { routeConfig } from "@Shared/config/rootConfig/routeConfig";
import { PageLoader } from "@Widgets/PageLoader";

const AppRouter = () => {
  return (
    <Routes>
      {(Object.values(routeConfig) as RouteProps[]).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <React.Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </React.Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
