import { BorderProps, ColorProps, FlexboxProps, LayoutProps, SizeProps, SpaceProps } from "styled-system";
import { TypographyComponentProps, TypographyVariants } from "../typography";
declare module "styled-system" {
    interface CustomComponentsTheme {
        button?: ButtonProps;
    }
}
export declare type ButtonProps = SpaceProps & SizeProps & ColorProps & BorderProps & FlexboxProps & {
    textStyle?: TypographyComponentProps;
    textVariant?: TypographyVariants;
} & LayoutProps;
export { default } from "./Button";