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