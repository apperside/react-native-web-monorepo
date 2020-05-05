import { MyBox } from "@apperside/app-ui/src/components";
import Button from "@apperside/app-ui/src/components/button";
import TextInput from "@apperside/app-ui/src/components/textinput";
import Text from "@apperside/app-ui/src/components/typography";
import { AppDispatch } from "@apperside/commons/src/redux";
import { loginAction } from "@apperside/commons/src/redux/loading";
import { isLoadingSelector } from "@apperside/commons/src/redux/loading/selectors";
import { VFlexBox } from "@apperside/ui-engine/src";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AppContent: React.FC<{}> = props => {
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
    <MyBox width={{ default: 1 / 2, tablet: 1 }}
      border="1px solid red">
      <Text>This is my box</Text>
    </MyBox>
    <TextInput placeholder="ciao"
      my={10}></TextInput>
    {!!isLoading &&
      <Text>CARICAMENTO</Text>
    }
    <Button onClick={onClick} >CLICK ME</Button>
  </VFlexBox>
};
export default AppContent;
