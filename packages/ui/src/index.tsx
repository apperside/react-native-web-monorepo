import { ThemeSpecs, buildTheme } from "components/src/theme/ThemeProvider";
import { themeBordersMap, themeBorderWidthsMap } from "./styleguide/borders";
import { breakpointsMap } from "./styleguide/breakpoints";
import { themeColors } from "./styleguide/colors";
import { sizesMap } from "./styleguide/sizes";
import { spacesMap } from "./styleguide/spaces";
import React from "react";
import { App as BaseApp } from "components/src/App";
import { fontFamilies, fontSizeMap } from "./styleguide/typography";
export type PropsWithVariant<T> = { variant?: T }
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

export const appTheme = buildTheme(themeSpecs);

export const App: React.FC = props => {
  return <BaseApp theme={appTheme} >{props.children}</BaseApp>;
};
