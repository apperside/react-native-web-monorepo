import { Col, Grid, Row, Box, FlexBox, VFlexBox } from "@apperside/ui-engine/src/layout";
import React from "react";
import { SafeAreaView, View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { App as AppContainer, Text } from "@apperside/app-ui/src";
import Button from "@apperside/app-ui/src/components/button";

const Container = styled.View((props) => ({
  backgroundColor: props.theme.colors.primary,
  flex: 1
}));

const App: React.FC = () => {
  return (
    <AppContainer>
      <VFlexBox flex={1}
        width={1}>
        <Text variant="HERO">Titolo</Text>
        <Box width={1 / 2}
          border="1px solid red">
          <Text variant="H1">CIAO</Text>
        </Box>
        <Button >CLICK ME</Button>
      </VFlexBox>
    </AppContainer>

  );
};

export default App;
