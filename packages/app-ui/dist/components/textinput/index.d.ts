import { BackgroundImageProps, BorderRadiusProps, BorderProps, ColorProps, FontFamilyProps, SpaceProps, TextStyleProps, TypographyProps as SSTypographyProps, WidthProps } from "styled-system";
import { TextInput } from "./TextInput";
export declare type TextInputVariants = "primary" | "secondary";
export declare type TextInputProps = SSTypographyProps & SpaceProps & WidthProps & ColorProps & BackgroundImageProps & TextStyleProps & FontFamilyProps & BorderRadiusProps & FontFamilyProps & BorderProps & {
    bold?: boolean;
    as?: any;
    variant?: TextInputVariants;
};
export default TextInput;
