// @ts-nocheck
import * as CSS from "csstype";
import { DefaultTheme } from "styled-components";

import { ObjectOrArray, Theme, ThemeBorders, ThemeBorderStyles, ThemeBreakpoints, ThemeColors, ThemeFontFamilies, ThemeFontSizes, ThemeSizes, ThemeSpaces } from "styled-system";
import { borders, borderWidths } from "./styleguide/borders";
import breakpoints from "./styleguide/breakpoints";
import { themeColors } from "./styleguide/colors";
import { sizes } from "./styleguide/sizes";
import { space } from "./styleguide/spaces";
import { fonts, fontSizes } from "./styleguide/typography/typography";
import { typografyVariants, TypographyProps, TypographyVariants } from "./styleguide/typography/TypographyComponent";
import { ButtonProps } from "../Button";

export type VariantsProps<Props, Variants extends string> =
  { [key in Variants]: Props & { [key in CSS.Pseudos]?: Props } }
/**
 * The type for a themed component with variants
 * @param Props type of component's props
 * @param Variant the type defining the component's variants
 *
 * EG: type MyComponentVariants = "primary" | "secondary"
 */
export type ThemedComponentWithVariants<Props, Variants extends string> =
  Props & { variants: VariantsProps<Props, Variants> }

export interface CustomComponentsTheme {
  typography: ThemedComponentWithVariants<TypographyProps, TypographyVariants>
  button: ButtonProps
}

/**
 * define the custom theme's shape
 */
declare module "styled-components" {
  export interface DefaultTheme extends Theme, CustomComponentsTheme {
    // override to remove optionality
    breakpoints: ObjectOrArray<number | string | symbol, keyof ThemeBreakpoints>;
    mediaQueries?: { [size: string]: string };
    space: ObjectOrArray<CSS.MarginProperty<number | string>, keyof ThemeSpaces>;
    fontSizes?: ObjectOrArray<CSS.FontSizeProperty<number>, keyof ThemeFontSizes>;
    colors: ThemeColors;
    fonts?: ObjectOrArray<CSS.FontFamilyProperty, keyof ThemeFontFamilies>;
    fontWeights?: ObjectOrArray<CSS.FontWeightProperty>;
    sizes?: ObjectOrArray<CSS.HeightProperty<{}> | CSS.WidthProperty<{}>, keyof ThemeSizes>;
    borders?: ObjectOrArray<CSS.BorderProperty<{}>, keyof ThemeBorders>;
    borderStyles?: ObjectOrArray<CSS.BorderProperty<{}>, keyof ThemeBorderStyles>;
    shadows?: ObjectOrArray<CSS.BoxShadowProperty>;
    zIndices?: ObjectOrArray<CSS.ZIndexProperty>;
    buttons?: ObjectOrArray<CSS.StandardProperties>;
    colorStyles?: ObjectOrArray<CSS.StandardProperties>;
    textStyles?: ObjectOrArray<CSS.StandardProperties>;
    // breakpoints: ThemeBreakpoints,
    // fontSizes: ThemeFontSizes,
    disableStyledSystemCache?: boolean,

  }
}

export type PropsWithVariant<T> = { variant?: T }

const defaultTheme: DefaultTheme = {
  space,
  breakpoints,
  fontSizes,
  fonts,
  sizes,
  borderWidths,
  borders,
  colors: themeColors,
  disableStyledSystemCache: true,
  typography: {
    variants: typografyVariants
  },
  button: {
    color: "success",
    backgroundColor: "white",
    paddingX: 25,
    paddingY: 20,
    minWidth: 100,
    alignSelf: "baseline"
  }

};
// @ts-ignore
export const defaultThemeNative: DefaultTheme = {
  color: {
    white: "#FFFFFF",
    black: "#000000"
  }

};

export { defaultTheme };