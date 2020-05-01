import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { border, BorderProps, color, ColorProps, FlexboxProps, layout, LayoutProps, size, SizeProps, space, SpaceProps, flexbox } from "styled-system";
import { TypographyComponentProps, TypographyVariants, Text } from "../typography";
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { appTheme } from "../..";
import { ButtonProps } from ".";

// eslint-disable-next-line max-len
// const variants = (theme: DefaultTheme): { variants: TypographyVariantsConfig } => ({ variants: theme.typography.variants });
export const ButtonSpecs = styled(TouchableOpacity)<ButtonProps>(
  space,
  size,
  layout,
  color,
  border,
  flexbox
  // props => variant(variants(props.theme))
);

// export const Button = styled(ButtonSpecs).withConfig<ButtonProps>({
//   // avoid forwarding styled-system's props to dom
//   shouldForwardProp: (prop) => (prop as any) === "children"
// })({});
ButtonSpecs.defaultProps = { ...appTheme.button };

export const Button: React.FC<React.ComponentProps<typeof ButtonSpecs>> = ({ color, textStyle, ...props }) => {
  return <ButtonSpecs {...props}
    {...textStyle} >
    <Text variant="footer"
      {...textStyle}
    >{props.children}</Text>
  </ButtonSpecs>;
};
