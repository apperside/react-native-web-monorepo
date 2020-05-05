import React from "react";
import { SafeAreaView } from "react-native";
import { DefaultTheme } from "styled-components/native";
import { ThemeProvider } from "../theme";
import { ThemeSpecs } from "../theme/ThemeProvider";
import { CustomComponentsTheme } from "styled-components";

export const App: React.FC<{ theme: ThemeSpecs, componentsTheme: CustomComponentsTheme }> = props => {
  return (
    <ThemeProvider baseTheme={props.theme}
      componentsTheme={props.componentsTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        {props.children}
      </SafeAreaView>
    </ThemeProvider>
  );
};
