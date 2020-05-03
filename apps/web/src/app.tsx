import { App as AppContainer } from "@apperside/app-ui/src";
import Button from "@apperside/app-ui/src/components/button";
import Text from "@apperside/app-ui/src/components/typography";
import { Box, VFlexBox } from "@apperside/ui-engine/src/layout";
import React from "react";
import TextInput from "@apperside/app-ui/src/components/textinput";

const App: React.FC<{}> = props => {
  return <AppContainer>
    <VFlexBox flex={1}
      alignItems="flex-start"
      width={1}>
      <Text
        mt={100}>The title</Text>
      <Box width={1 / 2}
        border="1px solid red">
        <Text>This is a box</Text>
      </Box>
      <TextInput></TextInput>
      <Button onClick={() => alert()} >CLICCAMI</Button>
    </VFlexBox>
  </AppContainer>
}
export default App