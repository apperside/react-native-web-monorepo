import { ThemedComponentWithVariants, VariantsProps } from "@apperside/ui-engine/src/theme";
import { BackgroundImageProps, BorderRadiusProps, ColorProps, FontFamilyProps, SpaceProps, TextStyleProps, ThemeFontFamilies, ThemeFontSizes, TypographyProps as SSTypographyProps, WidthProps } from "styled-system";

export type TypographyVariants = "HERO" |
  "H1" |
  "H2" |
  "H3" |
  "H4" |
  "P0" |
  "P1" |
  "P2" |
  "P3" |
  "MENU" |
  "FOOTER" |
  "CTA";

export type TypographyComponentProps =
  & SSTypographyProps
  & SpaceProps
  & WidthProps
  & ColorProps
  & BackgroundImageProps
  & TextStyleProps
  & FontFamilyProps
  & BorderRadiusProps
  & FontFamilyProps
  & {
    // utility prop to apply bold fontWeight
    bold?: boolean,
    // TODO: allow only valid html tag names
    as?: any
    variant?: TypographyVariants
  }

export interface CustomComponentsTheme {
  typography?: ThemedComponentWithVariants<TypographyComponentProps, TypographyVariants>
  // button?: ButtonProps
}
declare module "styled-system" {

  export interface ThemeFontFamilies {
    regular: string
    medium: string
    bold: string
    black: string
    extended: string
  }

  export interface ThemeFontSizes {
    small: string
    medium: string
    big: string
    [key: string]: string

  }
}

export const fontFamilies: ThemeFontFamilies = {
  regular: "GTAmerica-Regular",
  medium: "GTAmerica-Medium",
  bold: "GTAmerica-Bold",
  black: "GTAmerica-Black",
  extended: "GTAmerica-ExtendedRegular"
};

export const fontSizeMap: ThemeFontSizes = {
  small: "0.8rem",
  medium: "1rem",
  big: "1.3rem",
  "1.1rem": "1.1rem"
};

export { Text } from "./TypographyComponent";
