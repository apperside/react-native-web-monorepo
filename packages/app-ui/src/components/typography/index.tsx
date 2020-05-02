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

// export const typographyVariants: VariantsProps<TypographyComponentProps, TypographyVariants> = {
//   HERO: {
//     fontSize: {
//       default: 50,
//       tablet: 200,
//       desktop: 300
//     },
//     color: "red",
//     fontWeight: "bold",
//     // fontFamily: "heading",
//     lineHeight: {
//       default: 1.36,
//       tablet: 1.44,
//       desktop: 1.44
//     }
//   },
//   H1: {
//     fontSize: {
//       default: 20,
//       tablet: 24,
//       desktop: 24
//     },
//     color: "white",
//     fontWeight: "bold",
//     // fontFamily: "heading",
//     lineHeight: {
//       default: 1.3,
//       tablet: 1.33,
//       desktop: 1.33
//     }
//   },
//   H2: {
//     fontSize: {
//       default: 16,
//       tablet: 24,
//       desktop: 20
//     },
//     fontWeight: 700,
//     // fontFamily: "heading",
//     lineHeight: {
//       default: 1.38,
//       tablet: 1.2,
//       desktop: 1.2
//     }
//   },
//   H3: {
//     fontSize: 18,
//     fontWeight: 700,
//     color: "primary",
//     // fontFamily: "heading",
//     lineHeight: 1.33
//   },
//   H4: {
//     fontSize: 16,
//     fontWeight: 700,
//     color: "primary",
//     // fontFamily: "heading",
//     lineHeight: 1.33
//   },
//   P0: {
//     fontSize: {
//       default: 18,
//       tablet: 40,
//       desktop: 40
//     },
//     // fontFamily: "body",
//     lineHeight: 1.25
//   },
//   P1: {
//     fontSize: {
//       default: 18,
//       tablet: 22,
//       desktop: 22
//     },
//     // fontFamily: "body",
//     lineHeight: 1.36
//   },
//   P2: {
//     fontSize: {
//       default: 14,
//       tablet: 18,
//       desktop: 18
//     },
//     // fontFamily: "body",
//     lineHeight: 1.33
//   },
//   P3: {
//     fontSize: 14,
//     fontWeight: 300,
//     // fontFamily: "body",
//     lineHeight: 1.29
//   },
//   MENU: {
//     fontSize: {
//       default: 12,
//       tablet: 14,
//       desktop: 14
//     },
//     // fontFamily: "body",
//     lineHeight: 1.71
//   },
//   FOOTER: {
//     fontWeight: 700,
//     color: "footer",
//     fontSize: {
//       default: 14,
//       tablet: 18
//     },
//     // fontFamily: "body",
//     lineHeight: 1.33
//   },
//   CTA: {
//     color: "black",
//     fontSize: 14,
//     // fontFamily: "bold",
//     lineHeight: 1.71
//   }
// };

export { Text } from "./TypographyComponent";
