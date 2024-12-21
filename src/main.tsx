import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "@App/providers/ErrorBoundary";
import { ThemeProvider } from "@App/providers/ThemeProvider";

import "@App/styles/index.scss";
import App from "@App/App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
