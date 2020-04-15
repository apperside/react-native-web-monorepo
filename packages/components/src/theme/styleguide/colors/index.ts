import { ColorKeys, ThemeColors, ObjectOrArray } from "styled-system";
import * as CSS from "csstype";

declare module "styled-system" {

  export interface ThemeColors {
    primary: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    ctaButton1: string;
    ctaButton1Hover: string;
    ctaButton2: string;
    ctaButton2Hover: string;
    link: string;
    success: string;
    warning: string;
    error: string;
    heading: string;
    headerLinks: string;
    cta: string;
    text: string;
    disabled: string;
    footer: string;
    darkGrayBorder: string;
    headerBackground: string;
    grayLight: string;
    grayMedium: string;
    grayDark: string;
  }

}
// type ColorKeys =
//     "primary" |
//     "secondary" |
//     "secondaryLight" |
//     "secondaryDark" |
//     "link" |
//     "success" |
//     "warning" |
//     "error" |
//     "heading" |
//     "text" |
//     "disabled" |
//     "footer" |
//     "cta" |
//     "ctaButton1" |
//     "ctaButton2" |
//     "ctaButton1Hover" |
//     "ctaButton2Hover" |
//     "darkGrayBorder" |
//     "headerBackground" |
//     "headerLinks" |
//     "grayLight" |
//     "grayMedium" |
//     "grayDark";
// // export type ThemeColors = { [key in ColorKeys]: CSS.ColorProperty }

export const themeColors: ThemeColors = {
  primary: "#191e64",
  secondary: "#ff618d",
  secondaryLight: "#ff7c32",
  secondaryDark: "#ff618d",
  ctaButton1: "#ff618d",
  ctaButton1Hover: "#e42c7c",
  ctaButton2: "#ff9551",
  ctaButton2Hover: "#fc8d15",
  link: "#1890ff",
  success: "#52c41a",
  warning: "#faad14",
  error: "#e84118",
  heading: "#423EA2",
  headerLinks: "#423EA2",
  cta: "#fff",
  text: "#000",
  disabled: "#f5222d",
  footer: "#423EA2",
  darkGrayBorder: "#969696",
  headerBackground: "#F7F7f7",
  grayLight: "#E1E1E1",
  grayMedium: "#CACACA",
  grayDark: "#828282"
};

/**
 * These types are to be used in place of
 * styled-system's ColorProps, TextColorProps, BackgroundColorProps
 */

// export type CustomTextColorProps = {
//     color?: ColorKeys | "white" | "black"
// }

// export type CustomBackgroundColorProps = {
//     bg?: ColorKeys | "white" | "black"
//     backgroundColor?: ColorKeys | "white" | "black"
// }

// export type CustomColorProps = {
//     color?: ColorKeys | "white" | "black"
//     bg?: ColorKeys | "white" | "black"
//     backgroundColor?: (ColorKeys | "white" | "black")
// }