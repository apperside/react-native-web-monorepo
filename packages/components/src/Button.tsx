import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { border, BorderProps, color, ColorProps, FlexboxProps, layout, LayoutProps, size, SizeProps, space, SpaceProps, flexbox } from "styled-system";
import { defaultTheme } from "./theme";
import { Text, TypographyProps, TypographyVariants } from "./theme/styleguide/typography/TypographyComponent";

export type ButtonProps =
  & SpaceProps
  & SizeProps
  & ColorProps
  & BorderProps
  & FlexboxProps
  & {
    textStyle?: TypographyProps,
    textVariant?: TypographyVariants
  }
  & LayoutProps;

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
ButtonSpecs.defaultProps = { ...defaultTheme.button };

export const Button: React.FC<React.ComponentProps<typeof ButtonSpecs>> = ({ color, textStyle, ...props }) => {
  return <ButtonSpecs {...props}
    {...textStyle} >
    <Text variant="footer"
      {...textStyle}
    >{props.children}</Text>
  </ButtonSpecs>;
};
