import { BorderProps, ColorProps, FlexboxProps, LayoutProps, SizeProps, SpaceProps } from "styled-system";
import { TypographyComponentProps, TypographyVariants } from "../typography";
import { appTheme } from "../..";
import Button from "./Button";

export type ButtonProps =
  & SpaceProps
  & SizeProps
  & ColorProps
  & BorderProps
  & FlexboxProps
  & {
    textStyle?: TypographyComponentProps
  }
  & LayoutProps;

Button.defaultProps = {
  ...appTheme.button,
  variant: "primary"
};
export default Button;
