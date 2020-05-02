import { App as BaseApp } from "@apperside/ui-engine/src/App";
import { Col, Grid, Row } from "@apperside/ui-engine/src/layout";
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { buildTheme, ThemeSpecs } from "@apperside/ui-engine/src/theme/ThemeProvider";
import React from "react";
import { DefaultTheme } from "styled-components";
import { Theme } from "styled-system";
import { ButtonProps, ButtonVariants } from "./components/button";
import { fontFamilies, fontSizeMap, Text, TypographyComponentProps as MYTypographyProps, TypographyVariants, typographyVariants } from "./components/typography";
import { themeBordersMap, themeBorderWidthsMap } from "./styleguide/borders";
import { breakpointsMap } from "./styleguide/breakpoints";
import { themeColors } from "./styleguide/colors";
import { sizesMap } from "./styleguide/sizes";
import { spacesMap } from "./styleguide/spaces";
import { buttonTheme } from "./components/button/Button.theme";

export { Text, Col, Grid, Row };
// type PropsWithVariant<T> = { variant?: T }

// export { PropsWithVariant };
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    // override to remove optionality
    typographyStyles: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>
    textInput: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>
    button: ThemedComponentWithVariants<ButtonProps, ButtonVariants>

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
  // typographyStyles: typographyVariants,
  button: buttonTheme
};

export const App: React.FC = props => {
  return <BaseApp theme={appTheme} >{props.children}</BaseApp>;
};
