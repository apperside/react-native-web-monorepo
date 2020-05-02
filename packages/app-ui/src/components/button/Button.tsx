import React from "react";
import { TouchableOpacity } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { border, color, flexbox, layout, size, space, variant } from "styled-system";
import { ButtonProps } from ".";
import { appTheme } from "../..";
import { Text } from "../typography";
import shouldForwardProp from "@styled-system/should-forward-prop";

export const ButtonSpecs = styled(TouchableOpacity)<ButtonProps>(
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

ButtonSpecs.defaultProps = { ...appTheme.button };

const Button: React.FC<React.ComponentProps<typeof ButtonSpecs>> = (
  {
    textStyle: inlineTextStyle,
    variant,
    ...props
  }) => {
  const theme = useTheme();
  const themeTextStyle = theme.button.variants[variant]?.textStyle;
  return <ButtonSpecs {...props}
    variant={variant} >
    <Text
      textAlign="center"
      {...themeTextStyle}
      {...inlineTextStyle}
      {...props}
    >{props.children}</Text>
  </ButtonSpecs >;
};

export default Button;
