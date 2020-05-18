import React from "react";
import { DefaultTheme, CustomComponentsTheme } from "styled-components";
import { ThemeBorders, ThemeBorderWidths, ThemeBreakpoints, ThemeColors, ThemeFontFamilies, ThemeFontSizes, ThemeSizes, ThemeSpaces, ObjectOrArray } from "styled-system";
import { buildBreakpoints } from "../responsiveUtils";
import { SCThemeProvider } from "./ThemeProvider";

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
export const buildObjectOrArray = <P1, P2>(
  valuesMap: P2,
  useArrayProps: boolean = false
) => {
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

/**
 * This is the shape for a raw theme.
 * It must be feeded to buildTheme function to get a theme
 * object which works with styled-system
 */
export type BaseTheme = {
  borderWidths?: ThemeBorderWidths,
  borders?: ThemeBorders
  breakpoints?: ThemeBreakpoints
  colors: ThemeColors
  sizes?: ThemeSizes
  spaces?: ThemeSpaces
  fontFamilies?: ThemeFontFamilies
  fontSizes?: ThemeFontSizes
}

const buildBaseTheme = (specs: BaseTheme): DefaultTheme => {
  const defaultTheme: DefaultTheme = {
    space: buildObjectOrArray(specs.spaces),
    breakpoints: buildBreakpoints(specs.breakpoints),
    fontSizes: buildObjectOrArray(specs.fontSizes),
    fonts: buildObjectOrArray(specs.fontFamilies),
    sizes: buildObjectOrArray(specs.sizes),
    borderWidths: buildObjectOrArray(specs.borderWidths),
    borders: buildObjectOrArray(specs.borders),
    colors: specs.colors || {},
    disableStyledSystemCache: true
  };
  return defaultTheme;
};

export type ThemeProviderProps = {
  baseTheme: BaseTheme
  componentsTheme: CustomComponentsTheme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  baseTheme,
  componentsTheme,
  children
}) => {
  const theme = buildBaseTheme(baseTheme);
  const appTheme: DefaultTheme = {
    ...theme,
    ...componentsTheme
  };

  return <SCThemeProvider theme={appTheme}>
    {children}
  </SCThemeProvider>;
};
