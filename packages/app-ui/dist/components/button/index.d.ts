import { BorderProps, ColorProps, FlexboxProps, LayoutProps, SizeProps, SpaceProps } from "styled-system";
import { TypographyComponentProps, TypographyVariants } from "../typography";
import Button from "./Button";
export declare type ButtonVariants = "primary" | "secondary";
export declare type ButtonProps = SpaceProps & SizeProps & ColorProps & BorderProps & FlexboxProps & {
    textStyle?: TypographyComponentProps;
    textVariant?: TypographyVariants;
} & LayoutProps;
export default Button;
