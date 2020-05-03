import { MyBox } from ".";
import Button from "./button";
import TextInput from "./textinput";
import Text from "./typography";
import { AppDispatch } from "@apperside/commons/src/redux";
// import { loginAction } from "@apperside/commons/src/redux/loading/actions";
import { isLoadingSelector } from "@apperside/commons/src/redux/loading/selectors";
import { VFlexBox } from "@apperside/ui-engine/src/layout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "@apperside/commons/src/redux/loading";

const ExamplePage: React.FC<{}> = props => {
  const dispatch = useDispatch<AppDispatch>();

  const onClick = () => {
    console.log("clicked");
    dispatch(loginAction());
  };

  const isLoading = useSelector(isLoadingSelector);

  return <VFlexBox flex={1}
    alignItems="flex-start"
    width={1}>
    <Text
      mt={100}>The title</Text>
    <MyBox width={1 / 2}
      border="1px solid red">
      <Text>This is my box</Text>
    </MyBox>
    <TextInput placeholder="ciaone"
      my={10}></TextInput>
    {!!isLoading &&
      <Text>CARICAMENTO</Text>
    }
    <Button onPress={onClick} >CLICCAMI</Button>
  </VFlexBox>;
};
export default ExamplePage;
