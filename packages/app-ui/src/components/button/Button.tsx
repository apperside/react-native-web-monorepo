import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { border, BorderProps, color, ColorProps, flexbox, FlexboxProps, layout, LayoutProps, size, SizeProps, space, SpaceProps } from "styled-system";
import { appTheme } from "../..";
import { Text, TypographyComponentProps, TypographyVariants } from "../typography";
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

const Button: React.FC<React.ComponentProps<typeof ButtonSpecs>> = ({ color, textStyle, ...props }) => {
  return <ButtonSpecs {...props}
    {...textStyle} >
    <Text variant="footer"
      {...textStyle}
    >{props.children}</Text>
  </ButtonSpecs>;
};

export default Button;
