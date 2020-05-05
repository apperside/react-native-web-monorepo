import shouldForwardProp from "@styled-system/should-forward-prop";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { border, color, flexbox, layout, size, space, variant } from "styled-system";
import { ButtonStyleProps } from ".";
import Text from "../typography";
import { ButtonVariants } from "./Button.theme";
import { WithVariant } from "../..";

export const ButtonSpecs = styled(TouchableOpacity).withConfig<ButtonStyleProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
})<ButtonStyleProps>(
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

type Props = WithVariant<React.ComponentProps<typeof ButtonSpecs>, ButtonVariants> & { onClick: (e: any) => void }
const Button: React.FC<Props> = (
  {
    textStyle: inlineTextStyle,
    variant = "primary",
    onClick,
    ...props
  }) => {
  const theme = useTheme();
  const themeTextStyle = theme.button.variants[variant]?.textStyle;
  const { variants, ...baseProps } = theme.button;
  return <ButtonSpecs {...baseProps}
    onPress={onClick}
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
