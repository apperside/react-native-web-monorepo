import { App as BaseApp } from "@apperside/ui-engine/src/App";
import { BaseTheme } from "@apperside/ui-engine/src/theme/ThemeProvider";
import { Col, Grid, Row } from "@apperside/ui-engine/src";
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import React from "react";
import { CustomComponentsTheme, DefaultTheme } from "styled-components";
import { ButtonStyleProps } from "./components/button";
import { buttonTheme, ButtonVariants } from "./components/button/Button.theme";
import { TextInputStyleProps, TextInputVariants } from "./components/textinput";
import { textInputTheme } from "./components/textinput/TextInput.theme";
import { fontFamilies, fontSizeMap, TypographyComponentStyleProps as MYTypographyProps, TypographyVariants } from "./components/typography";
import { typographyTheme } from "./components/typography/Typography.theme";
import { themeBordersMap, themeBorderWidthsMap } from "./styleguide/borders";
import { breakpointsMap } from "./styleguide/breakpoints";
import { themeColors } from "./styleguide/colors";
import { sizesMap } from "./styleguide/sizes";
import { spacesMap } from "./styleguide/spaces";

export { Col, Grid, Row };

declare module "styled-components" {
  export interface CustomComponentsTheme {
    typographyStyles: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>
    textInput: ThemedComponentWithVariants<TextInputStyleProps, TextInputVariants>
    button: ThemedComponentWithVariants<ButtonStyleProps, ButtonVariants>
  }
}

const themeSpecs: BaseTheme = {
  borderWidths: themeBorderWidthsMap,
  borders: themeBordersMap,
  breakpoints: breakpointsMap,
  colors: themeColors,
  sizes: sizesMap,
  spaces: spacesMap,
  fontFamilies: fontFamilies,
  fontSizes: fontSizeMap
};

const componentsTheme: CustomComponentsTheme = {
  button: buttonTheme,
  typographyStyles: typographyTheme,
  textInput: textInputTheme
};

export type WithVariant<P, V> = P & { variant?: V }
// export const appTheme: DefaultTheme = {
//   ...buildBaseTheme(themeSpecs),
//   ...getComponentsTheme()
// };

export const App: React.FC = props => {
  return <BaseApp theme={themeSpecs}
    componentsTheme={componentsTheme} >{props.children}</BaseApp>;
};
