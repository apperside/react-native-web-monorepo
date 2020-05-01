import { ThemedComponentWithVariants, VariantsProps } from "@apperside/ui-engine/src/theme";
import { BackgroundImageProps, BorderRadiusProps, ColorProps, FontFamilyProps, SpaceProps, TextStyleProps, ThemeFontFamilies, ThemeFontSizes, TypographyProps as SSTextInputProps, WidthProps } from "styled-system";
export declare type TextInputVariants = "HERO" | "H1" | "H2" | "H3" | "H4" | "P0" | "P1" | "P2" | "P3" | "MENU" | "FOOTER" | "CTA";
export declare type TextInputProps = SSTextInputProps & SpaceProps & WidthProps & ColorProps & BackgroundImageProps & TextStyleProps & FontFamilyProps & BorderRadiusProps & FontFamilyProps & {
    bold?: boolean;
    as?: any;
    variant?: TextInputVariants;
};
export interface CustomComponentsTheme {
    TextInput?: ThemedComponentWithVariants<TextInputProps, TextInputVariants>;
}
declare module "styled-system" {
    interface ThemeFontFamilies {
        heading: string;
        body: string;
        bold: string;
    }
    interface ThemeFontSizes {
        small: string;
        medium: string;
        big: string;
        [key: string]: string;
    }
}
export declare const fontFamilies: ThemeFontFamilies;
export declare const fontSizeMap: ThemeFontSizes;
export declare const TextInputVariants: VariantsProps<TextInputProps, TextInputVariants>;
export { TextInput } from "./TextInput";
