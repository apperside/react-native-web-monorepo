import React from "react";
import { DefaultTheme, CustomComponentsTheme } from "styled-components";
import { ThemeProvider } from "../theme";
import { ThemeSpecs } from "../theme/ThemeProvider";

export const App: React.FC<{ theme: ThemeSpecs, componentsTheme: CustomComponentsTheme }> = (props) => {
  return (
    <ThemeProvider baseTheme={props.theme}
      componentsTheme={props.componentsTheme}>
      {props.children}
    </ThemeProvider>
  );
};
