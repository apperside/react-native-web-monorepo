import { ObjectOrArray, ThemeFontFamilies, ThemeFontSizes } from "styled-system";
import * as CSS from "csstype";
export { Text } from "./TypographyComponent";

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
export const fonts: ObjectOrArray<CSS.FontFamilyProperty, keyof ThemeFontFamilies> = [];

Object.keys(fontFamilies).forEach((fontFamilyKey) => {
  // fonts.push(fontFamilies[fontFamilyKey]);
  // aliases
  fonts[fontFamilyKey] = fontFamilies[fontFamilyKey];
});

const fontSizeMap: ThemeFontSizes = {
  small: "0.8rem",
  medium: "1rem",
  big: "1.3rem",
  "1.1rem": "1.1rem"
};

/**
 * Here we create styled-system size aliases for fontSize
 * https://styled-system.com/guides/array-scales/#aliases
 */
// @ts-ignore
export const fontSizes: ObjectOrArray<CSS.FontSizeProperty<number>, keyof ThemeFontSizes> = [];
Object.keys(fontSizeMap).forEach((fontSizeKey) => {
  // fontSizes.push(fontSizeMap[fontSizeKey]);
  fontSizes[fontSizeKey] = fontSizeMap[fontSizeKey];
});
