import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { AppContent } from "../AppContent";
import { defaultTheme } from "../theme";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
const MainText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
  color: red;
`;

export const App: React.FC = props => {
  return (
    <ThemeProvider theme={defaultTheme}>
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
