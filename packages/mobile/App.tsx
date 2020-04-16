import { Col, Grid, Row } from "components/src/layout";
import React from "react";
import { SafeAreaView } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { App as AppContainer } from "ui/src";
import { Text } from "ui/src/components/typography";
const Container = styled.View(props => ({
  backgroundColor: props.theme.colors.primary,
  flex: 1
}));

export const App: React.FC = () => {
  return (
    <AppContainer>
      <Grid flex={1}
        backgroundColor="red"
        width={1}>
        <Row>
          <Col width={1 / 2}>
            <Text variant="H1">CIAO</Text>
          </Col>
          <Col width={1 / 2}>
            <Text variant="H1">CIAO</Text>
          </Col>
        </Row>

      </Grid>
    </AppContainer>
  );
};
