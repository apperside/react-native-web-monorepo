import { App as AppContainer } from "components/src/App"
import { Col, Grid, Row } from "components/src/layout"
import { defaultTheme } from "components/src/theme"
import React from "react"


const App: React.FC<{}> = props => {
  console.log(defaultTheme)
  return <AppContainer>
    <Grid flex={1} width={1}>
      <Row border="12px solid green">
        <Col border="1px solid red" width={{ default: 1, tablet: 1 / 2 }}>

        </Col>
        <Col border="1px solid red" width={{ default: 1, tablet: 1 / 2 }}>

        </Col>
      </Row>

    </Grid>
  </AppContainer>
}
export default App