import { BorderProps, ColorProps, FlexboxProps, LayoutProps, SizeProps, SpaceProps } from "styled-system";
import { TypographyComponentProps, TypographyVariants } from "../typography";
import Button from "./Button";

export type ButtonVariants = "primary" | "secondary"

export type ButtonProps =
  & SpaceProps
  & SizeProps
  & ColorProps
  & BorderProps
  & FlexboxProps
  & {
    textStyle?: TypographyComponentProps,
    textVariant?: TypographyVariants
  }
  & LayoutProps;
Button.defaultProps = {
  variant: "primary"
};
export default Button;
