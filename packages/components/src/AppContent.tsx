import React from "react";
import { Grid, Row, Col } from "./layout";
import { Text } from "./theme/styleguide/typography";
export const AppContent: React.FC = () => {
  return <Grid flex={1}
    width={1}>
    <Row border="12px solid green">
      <Col width={{ default: 1, tablet: 1 / 2 }}>
        <Text variant="HERO">CIAO</Text>
      </Col>
      <Col border="1px solid red"
        width={{ default: 1, tablet: 1 / 2 }}>
        <Text variant="HERO">CIAO</Text>
      </Col>
    </Row>

  </Grid>;
};
