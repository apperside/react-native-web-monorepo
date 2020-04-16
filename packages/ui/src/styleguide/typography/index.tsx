import { ThemeFontFamilies, ThemeFontSizes } from "styled-system";

declare module "styled-system" {

  export interface ThemeFontFamilies {
    heading: string,
    body: string
    bold: string
  }

  export interface ThemeFontSizes {
    small: string
    medium: string
    big: string
    [key: string]: string

  }
}

export const fontFamilies: ThemeFontFamilies = {
  heading: "GTAmerica-Extended-Bold, Helvetica, Arial, sans-serif",
  body: "GTAmerica-Regular, Helvetica, Arial, sans-serif",
  bold: "GTAmerica-Bold, Helvetica, Arial, sans-serif"
};

export const fontSizeMap: ThemeFontSizes = {
  small: "0.8rem",
  medium: "1rem",
  big: "1.3rem",
  "1.1rem": "1.1rem"
};
