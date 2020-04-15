
import { BreakpointNames, ThemeBreakpoints, ObjectOrArray } from "styled-system";

declare module "styled-system" {

  export interface ThemeBreakpoints {
    default: number | string,
    // default is needed by styled-system in order to work
    mobileM: number | string,
    mobileL: number | string,
    tablet: number | string,
    desktopLow: number | string,
    desktopMid: number | string,
    // laptopL: number | string,
    desktop: number | string,
    desktopLarge: number | string
  }
}
