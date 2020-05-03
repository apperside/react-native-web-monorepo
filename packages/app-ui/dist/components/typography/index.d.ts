import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { BackgroundImageProps, BorderRadiusProps, FlexboxProps, ColorProps, FontFamilyProps, SpaceProps, TextStyleProps, ThemeFontFamilies, ThemeFontSizes, TypographyProps as SSTypographyProps, WidthProps } from "styled-system";
import Text from "./TypographyComponent";
export declare type TypographyVariants = "regular" | "medium" | "bold" | "black" | "extended";
export declare type TypographyComponentProps = SSTypographyProps & SpaceProps & WidthProps & ColorProps & BackgroundImageProps & TextStyleProps & FontFamilyProps & BorderRadiusProps & FontFamilyProps & FlexboxProps & {
    bold?: boolean;
    variant?: TypographyVariants;
};
export interface CustomComponentsTheme {
    typography?: ThemedComponentWithVariants<TypographyComponentProps, TypographyVariants>;
}
declare module "styled-system" {
    interface ThemeFontFamilies {
        regular: string;
        medium: string;
        bold: string;
        black: string;
        extended: string;
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
export default Text;
