import { App as AppContainer } from "@apperside/app-ui/src"
import { Col, Grid, Row } from "@apperside/ui-engine/src/layout"
import React from "react"
import Button from "@apperside/app-ui/src/components/button"


const App: React.FC<{}> = props => {
  return <AppContainer>
    <Grid flex={1} width={1} backgroundColor="red" height="100%" >
      <Row borderColor="green">
        <Col borderColor="ctaButton1" backgroundColor="yellow" borderWidth={1} width={{ default: 1, tablet: 1 / 2 }}>
          <Button>CLICK ME</Button>
        </Col>
        <Col border="1px solid red" width={{ default: 1, tablet: 1 / 2 }}>

        </Col>
      </Row>

    </Grid>
  </AppContainer>
}
export default App