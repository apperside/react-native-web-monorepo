import { App as BaseApp } from "@apperside/ui-engine/src/App";
import { Col, Grid, Row } from "@apperside/ui-engine/src/layout";
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { buildTheme, ThemeSpecs } from "@apperside/ui-engine/src/theme/ThemeProvider";
import React from "react";
import { DefaultTheme } from "styled-components";
import { Theme } from "styled-system";
import { ButtonProps } from "./components/button";
import { buttonTheme, ButtonVariants } from "./components/button/Button.theme";
import { TextInputProps, TextInputVariants } from "./components/textinput";
import { textInputTheme } from "./components/textinput/TextInput.theme";
import { fontFamilies, fontSizeMap, TypographyComponentProps as MYTypographyProps, TypographyVariants } from "./components/typography";
import { typographyTheme } from "./components/typography/Typography.theme";
import { themeBordersMap, themeBorderWidthsMap } from "./styleguide/borders";
import { breakpointsMap } from "./styleguide/breakpoints";
import { themeColors } from "./styleguide/colors";
import { sizesMap } from "./styleguide/sizes";
import { spacesMap } from "./styleguide/spaces";

// export * from "./components";
export { Col, Grid, Row };
// type PropsWithVariant<T> = { variant?: T }

// export { PropsWithVariant };
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    typographyStyles: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>
    textInput: ThemedComponentWithVariants<TextInputProps, TextInputVariants>
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
  button: buttonTheme,
  typographyStyles: typographyTheme,
  textInput: textInputTheme
};

export const App: React.FC = props => {
  return <BaseApp theme={appTheme} >{props.children}</BaseApp>;
};
