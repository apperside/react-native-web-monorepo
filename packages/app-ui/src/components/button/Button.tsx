import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { border, color, flexbox, layout, size, space, variant } from "styled-system";
import { ButtonProps } from ".";
import { appTheme } from "../..";
import { Text } from "../typography";

// eslint-disable-next-line max-len
// const variants = (theme: DefaultTheme): { variants: TypographyVariantsConfig } => ({ variants: theme.typography.variants });
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
// export const Button = styled(ButtonSpecs).withConfig<ButtonProps>({
//   // avoid forwarding styled-system's props to dom
//   shouldForwardProp: (prop) => (prop as any) === "children"
// })({});
ButtonSpecs.defaultProps = { ...appTheme.button };

const Button: React.FC<React.ComponentProps<typeof ButtonSpecs>> = ({ variant = "primary", color, textStyle, ...props }) => {
  console.warn("buttton theme", props.theme);
  return <ButtonSpecs {...props}
    {...textStyle} >
    <Text variant="footer"
      {...textStyle}
    >{props.children}</Text>
  </ButtonSpecs>;
};

export default Button;
