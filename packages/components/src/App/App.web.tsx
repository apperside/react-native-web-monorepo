import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Platform
} from "react-native";
import { Text } from "components/src/theme/styleguide/typography/TypographyComponent";
import { AppHeader } from "../AppHeader";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";
import { Button } from "../Button";
import { Grid, Row, Col } from "../layout";
import { AppContent } from "../AppContent";

export const App: React.FC = (props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {props.children}
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
