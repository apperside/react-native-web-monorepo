import React from "react";
import { SafeAreaView } from "react-native";
import { CustomComponentsTheme } from "styled-components";
import { ThemeProvider } from "../theme";
import { BaseTheme } from "../theme/ThemeProvider";

export const App: React.FC<{ theme: BaseTheme, componentsTheme: CustomComponentsTheme }> = props => {
  return (
    <ThemeProvider baseTheme={props.theme}
      componentsTheme={props.componentsTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        {props.children}
      </SafeAreaView>
    </ThemeProvider>
  );
};
