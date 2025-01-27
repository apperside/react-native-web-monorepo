import React from "react";
import { DefaultTheme } from "styled-components";
import { ThemeProvider } from "../theme";

export const App: React.FC<{ theme: DefaultTheme }> = (props) => {
  return (
    <ThemeProvider theme={props.theme}>
      {props.children}
    </ThemeProvider>
  );
};
