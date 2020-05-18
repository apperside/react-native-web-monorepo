import { ThemeProvider } from "@apperside/ui-engine/src/theme";
import React from "react";
import { SafeAreaView } from "react-native";
import { AppProps } from ".";

export const App: React.FC<AppProps> = ({ baseTheme, componentsTheme, children }) => {
  return <ThemeProvider baseTheme={baseTheme}
    componentsTheme={componentsTheme} >
    <SafeAreaView style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  </ThemeProvider >;
};
