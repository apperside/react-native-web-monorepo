import { ThemedComponentWithVariants, VariantsProps } from "components/src/theme";
import { BackgroundImageProps, BorderRadiusProps, ColorProps, FontFamilyProps, SpaceProps, TextStyleProps, ThemeFontFamilies, ThemeFontSizes, TypographyProps as SSTypographyProps, WidthProps } from "styled-system";
export declare type TypographyVariants = "HERO" | "H1" | "H2" | "H3" | "H4" | "P0" | "P1" | "P2" | "P3" | "MENU" | "FOOTER" | "CTA";
export declare type TypographyComponentProps = SSTypographyProps & SpaceProps & WidthProps & ColorProps & BackgroundImageProps & TextStyleProps & FontFamilyProps & BorderRadiusProps & FontFamilyProps & {
    bold?: boolean;
    as?: any;
    variant?: TypographyVariants;
};
export interface CustomComponentsTheme {
    typography?: ThemedComponentWithVariants<TypographyComponentProps, TypographyVariants>;
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
export declare const typographyVariants: VariantsProps<TypographyComponentProps, TypographyVariants>;
export { Text } from "./TypographyComponent";
