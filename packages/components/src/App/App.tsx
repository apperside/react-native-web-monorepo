import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white"
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: "white"
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "black"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: "gray"
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: "gray",
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

declare var global: any;
