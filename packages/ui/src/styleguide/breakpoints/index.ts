
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

/**
 * The logic is mobile first, so the first breakpoint is alway from 0 to the first declared one
 */
export const breakpointsMap: ThemeBreakpoints = {
  default: "0px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "600px",
  desktopLow: "1024px",
  desktopMid: "1366px",
  // laptopL: "1440px",
  desktop: "1440px",
  desktopLarge: "1620px"
};

export default breakpointsMap;
