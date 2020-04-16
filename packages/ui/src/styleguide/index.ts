import { ThemeSpecs } from "components/src/theme/ThemeProvider";
import { themeBordersMap, themeBorderWidthsMap } from "./borders";
import { breakpointsMap } from "./breakpoints";
import { themeColors } from "./colors";
import { sizesMap } from "./sizes";
import { spacesMap } from "./spaces";

export type PropsWithVariant<T> = { variant?: T }
const themeSpecs: ThemeSpecs = {
  borderWidths: themeBorderWidthsMap,
  borders: themeBordersMap,
  breakpoints: breakpointsMap,
  colors: themeColors,
  sizes: sizesMap,
  spaces: spacesMap
};
