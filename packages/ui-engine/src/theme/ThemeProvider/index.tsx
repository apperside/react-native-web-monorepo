import React from "react";
import { DefaultTheme, CustomComponentsTheme } from "styled-components";
import { ThemeBorders, ThemeBorderWidths, ThemeBreakpoints, ThemeColors, ThemeFontFamilies, ThemeFontSizes, ThemeSizes, ThemeSpaces } from "styled-system";
import { buildBreakpoints } from "../responsiveUtils";
import { SCThemeProvider } from "./ThemeProvider";
import { buildObjectOrArray } from "..";

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
