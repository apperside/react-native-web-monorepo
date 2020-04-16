import React from "react";
import { DefaultTheme } from "styled-components";
import { ObjectOrArray, ThemeBorders, ThemeBorderWidths, ThemeBreakpoints, ThemeColors, ThemeFontFamilies, ThemeFontSizes, ThemeSizes, ThemeSpaces } from "styled-system";
import { buildBreakpoints } from "../styleguide/breakpoints";
import { SCThemeProvider } from "./ThemeProvider";
// import { typografyVariants } from "../styleguide/typography/TypographyComponent";
export type ThemeSpecs = {
  borderWidths?: ThemeBorderWidths,
  borders?: ThemeBorders
  breakpoints?: ThemeBreakpoints
  colors: ThemeColors
  sizes?: ThemeSizes
  spaces?: ThemeSpaces
  fontFamilies?: ThemeFontFamilies
  fontSizes?: ThemeFontSizes
  // typograpfyVariants?: { [key in keyof TypographyVariants]: TypographyProps }
}

export type ThemeProviderProps = {
  theme?: DefaultTheme,
  themeSpecs?: ThemeSpecs
}

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

export const buildTheme = (specs: ThemeSpecs): DefaultTheme => {
  const defaultTheme: DefaultTheme = {
    space: buildObjectOrArray(specs.spaces),
    breakpoints: buildBreakpoints(specs.breakpoints),
    fontSizes: buildObjectOrArray(specs.fontSizes),
    fonts: buildObjectOrArray(specs.fontFamilies),
    sizes: buildObjectOrArray(specs.sizes),
    borderWidths: buildObjectOrArray(specs.borderWidths),
    borders: buildObjectOrArray(specs.borders),
    colors: specs.colors || {},
    // typography: specs.typograpfyVariants,
    disableStyledSystemCache: true

    // button: {
    //   color: "success",
    //   backgroundColor: "ctaButton1",
    //   paddingX: 25,
    //   paddingY: 20,
    //   minWidth: 100,
    //   alignSelf: "baseline",
    //   borderRadius: 12
    // }

  };
  return defaultTheme;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, themeSpecs, children }) => {
  let finalTheme = theme;

  if (!finalTheme && themeSpecs) {
    finalTheme = buildTheme(themeSpecs);
  }
  if (finalTheme) {
    return <SCThemeProvider theme={finalTheme}>
      {children}
    </SCThemeProvider>;
  }
  return null;
};
