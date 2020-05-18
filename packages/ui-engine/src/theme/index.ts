import * as CSS from "csstype";

import { ObjectOrArray, Theme as StyledSystemTheme, ThemeBorders, ThemeBorderStyles, ThemeBreakpoints, ThemeColors, ThemeFontFamilies, ThemeFontSizes, ThemeSizes, ThemeSpaces } from "styled-system";

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

export type PropsWithVariant<T> = { variant?: T }
/**
 * define the custom theme shape based on styled-system requirements
 */
declare module "styled-components" {

  export interface CustomComponentsTheme {
    // to be extended
  }

  export interface DefaultTheme extends StyledSystemTheme, CustomComponentsTheme {
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
    disableStyledSystemCache?: boolean,

  }
}

export { ThemeProvider } from "./ThemeProvider";
