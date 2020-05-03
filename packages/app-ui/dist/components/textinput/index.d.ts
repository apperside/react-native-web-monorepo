import { BackgroundImageProps, BorderProps, BorderRadiusProps, ColorProps, FontFamilyProps, LayoutProps, SpaceProps, TextStyleProps, TypographyProps as SSTypographyProps, WidthProps } from "styled-system";
import { TextInput } from "./TextInput";
export declare type TextInputVariants = "primary" | "secondary";
export declare type TextInputProps = SSTypographyProps & SpaceProps & WidthProps & ColorProps & BackgroundImageProps & TextStyleProps & FontFamilyProps & BorderRadiusProps & FontFamilyProps & BorderProps & LayoutProps & {
    bold?: boolean;
    as?: any;
    variant?: TextInputVariants;
    value?: any;
};
export default TextInput;
