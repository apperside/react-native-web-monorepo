import { Col, Grid, Row } from "@apperside/ui-engine/src";
import { ThemeProvider } from "@apperside/ui-engine/src/theme";
import React from "react";
import { AppProps } from ".";

export { Col, Grid, Row };

export const App: React.FC<AppProps> = ({ baseTheme, componentsTheme, children }) => {
  return <ThemeProvider baseTheme={baseTheme}
    componentsTheme={componentsTheme} >
    {children}
  </ThemeProvider>;
};
