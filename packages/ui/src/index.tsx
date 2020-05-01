import { App as BaseApp } from "components/src/App";
import { ThemedComponentWithVariants } from "components/src/theme";
import { buildTheme, ThemeSpecs } from "components/src/theme/ThemeProvider";
import React from "react";
import { DefaultTheme } from "styled-components";
import { Theme } from "styled-system";
import { ButtonProps } from "./components/button";
import { fontFamilies, fontSizeMap, TypographyComponentProps as MYTypographyProps, TypographyVariants } from "./components/typography";
import { themeBordersMap, themeBorderWidthsMap } from "./styleguide/borders";
import { breakpointsMap } from "./styleguide/breakpoints";
import { themeColors } from "./styleguide/colors";
import { sizesMap } from "./styleguide/sizes";
import { spacesMap } from "./styleguide/spaces";
export type PropsWithVariant<T> = { variant?: T }

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    // override to remove optionality
    typography: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>
    textInput: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>
    button: ButtonProps

  }
}
const themeSpecs: ThemeSpecs = {
  borderWidths: themeBorderWidthsMap,
  borders: themeBordersMap,
  breakpoints: breakpointsMap,
  colors: themeColors,
  sizes: sizesMap,
  spaces: spacesMap,
  fontFamilies: fontFamilies,
  fontSizes: fontSizeMap
};

export const appTheme: DefaultTheme = {
  ...buildTheme(themeSpecs),
  button: {
    color: "success",
    backgroundColor: "ctaButton1",
    paddingX: 25,
    paddingY: 20,
    minWidth: 100,
    alignSelf: "baseline",
    borderRadius: 12
  }
};

export const App: React.FC = props => {
  return <BaseApp theme={appTheme} >{props.children}</BaseApp>;
};
