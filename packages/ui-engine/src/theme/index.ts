import * as CSS from "csstype";
import { DefaultTheme } from "styled-components";
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

export type PropsWithVariant<T> = { variant?: T }

/**
 * This function takes in input a map and produces an array with aliases
 * as described here https://styled-system.com/responsive-styles#using-objects
 *
 * Basically is an array, with properties attached to it.
 * So what it will be returned is an array containing all the map's values
 * with attached all the input object properties
 *
 * @param valuesMap the values map to build the object with
 * @param useArrayProps whenever use or not styled-system's array props
 *
 * NOTE ABOUT ARRAY PROPS
 * https://styled-system.com/guides/array-props
 * todo: explain pros and cons of array props
 */
export const buildObjectOrArray = <P1, P2>(valuesMap: P2, useArrayProps: boolean = false) => {
  // @ts-ignore
  const result: ObjectOrArray<P1, keyof P2> = [];
  Object.keys(valuesMap).forEach((valueKey) => {
    if (useArrayProps) {
      result.push(valuesMap[valueKey]);
    }
    // aliases
    result[valueKey] = valuesMap[valueKey];
  });
  return result;
};
