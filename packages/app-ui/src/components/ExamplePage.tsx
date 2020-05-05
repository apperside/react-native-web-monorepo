import { MyBox } from ".";
import Button from "./button";
import TextInput from "./textinput";
import Text from "./typography";
import { AppDispatch } from "@apperside/commons/src/redux";
import { isLoadingSelector } from "@apperside/commons/src/redux/loading/selectors";
import { VFlexBox } from "@apperside/ui-engine/src";
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
    alignItems="center"
    border="1px solid red"
    alignSelf="center"
    ml="MY_MARGIN"
    width={8 / 10}>
    <Text variant="bold"
      fontSize="screenTitle">Welcome</Text>
    <MyBox width={1}
      border="1px solid red">
      <Text>This is a div on the web a d a View on RN</Text>
    </MyBox>
    <TextInput onChange={(e) => console.warn("change")}
      placeholder="Insert code"
      my={10}></TextInput>
    {!!isLoading &&
      <Text>CARICAMENTO</Text>
    }
    <Button pt={10}
      onClick={onClick} >CLICK ME</Button>
  </VFlexBox>;
};
export default ExamplePage;
