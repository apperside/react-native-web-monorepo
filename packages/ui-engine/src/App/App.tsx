import React from "react";
import { SafeAreaView } from "react-native";
import { DefaultTheme } from "styled-components";
import { ThemeProvider } from "../theme/ThemeProvider";

export const App: React.FC<{ theme: DefaultTheme }> = props => {
  return (
    <ThemeProvider theme={props.theme}>
      <SafeAreaView style={{ flex: 1 }}>
        {props.children}
      </SafeAreaView>
    </ThemeProvider>
  );
};