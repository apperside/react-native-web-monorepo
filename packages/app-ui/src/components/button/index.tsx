import { BorderProps, ColorProps, FlexboxProps, LayoutProps, SizeProps, SpaceProps } from "styled-system";
import { TypographyComponentStyleProps, TypographyVariants } from "../typography";
import { appTheme } from "../..";
import Button from "./Button";

export type ButtonStyleProps =
  & SpaceProps
  & SizeProps
  & ColorProps
  & BorderProps
  & FlexboxProps
  & {
    textStyle?: TypographyComponentStyleProps
  }
  & LayoutProps;

Button.defaultProps = {
  ...appTheme.button,
  variant: "primary"
};
export default Button;
