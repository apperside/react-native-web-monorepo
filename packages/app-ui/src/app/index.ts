import { CustomComponentsTheme } from "styled-components";
import { BaseTheme } from "@apperside/ui-engine/src/theme/ThemeProvider";
export type AppProps = {
  baseTheme: BaseTheme;
  componentsTheme: CustomComponentsTheme
}
export { App } from "./App";
