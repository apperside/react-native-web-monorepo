import { BorderProps, ColorProps, FlexboxProps, LayoutProps, SizeProps, SpaceProps } from "styled-system";
import { TypographyComponentProps } from "../typography";
import Button from "./Button";
export declare type ButtonProps = SpaceProps & SizeProps & ColorProps & BorderProps & FlexboxProps & {
    textStyle?: TypographyComponentProps;
} & LayoutProps;
export default Button;
