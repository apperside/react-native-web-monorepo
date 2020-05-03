import React from "react";
import { TouchableOpacity } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { border, color, flexbox, layout, size, space, variant } from "styled-system";
import { ButtonProps } from ".";
import { appTheme } from "../..";
import Text from "../typography";
import shouldForwardProp from "@styled-system/should-forward-prop";

export const ButtonSpecs = styled(TouchableOpacity).withConfig<ButtonProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
})<ButtonProps>(
  space,
  size,
  layout,
  color,
  border,
  flexbox,
  props => variant({
    variants: props.theme.button.variants
  })
);

const Button: React.FC<React.ComponentProps<typeof ButtonSpecs>> = (
  {
    textStyle: inlineTextStyle,
    variant,
    ...props
  }) => {
  const theme = useTheme();
  const themeTextStyle = theme.button.variants[variant]?.textStyle;
  const { variants, ...baseProps } = theme.button;
  return <ButtonSpecs {...baseProps}
    {...props}
    variant={variant} >
    <Text
      alignSelf="flex-start"
      textAlign="center"
      {...themeTextStyle}
      {...inlineTextStyle}
      {...props}
    >{props.children}</Text>
  </ButtonSpecs >;
};

export default Button;
