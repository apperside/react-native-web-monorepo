
import { BreakpointNames, ThemeBreakpoints, ObjectOrArray } from "styled-system";
import { buildObjectOrArray } from "./ThemeProvider";

/**
 * The logic is mobile first, so the first breakpoint is alway from 0 to the first declared one
 */
let breakpointsMap: ThemeBreakpoints = {
  /**
   * sample values
   */
  // default: "0px",
  // mobileM: "375px",
  // mobileL: "425px",
  // tablet: "600px",
  // desktopLow: "1024px",
  // desktopMid: "1366px",
  // // laptopL: "1440px",
  // desktop: "1440px",
  // desktopLarge: "1620px"
};

const mediaqueries: { [key in keyof ThemeBreakpoints]: string } = {};

/**
 * given the input object it will produce mediaqueries to be easily used with  styled-components
 *
 * @param breakpoints an object where the keys are the breakpoint names and the values the breakpoint value
 * @param useArrayProps whenever or not to use styled-system's array props https://styled-system.com/guides/array-props
 */
export const buildBreakpoints = (breakpoints?: ThemeBreakpoints, useArrayProps: boolean = false) => {
  if (!breakpoints) return [];
  breakpointsMap = breakpoints;
  buildMediaQueries(breakpoints);
  return buildObjectOrArray<number | string | symbol, ThemeBreakpoints>(breakpoints, useArrayProps);
};

const buildMediaQueries = (breakpointsMap: ThemeBreakpoints) => {
  Object.keys(breakpointsMap).forEach((breakpointKey) => {
    mediaqueries[breakpointKey] = `@media screen and (min-width:${breakpointsMap[breakpointKey]})`;
  });
};

type MediaQueries = {
  down: (breakpoint: BreakpointNames) => string
  up: (breakpoint: BreakpointNames) => string
  between: (breakpointMin: BreakpointNames, breakpointMax: BreakpointNames) => string,
} & { [key in BreakpointNames]: string }

export const mediaQuery: MediaQueries = {
  down: (breakpoint: BreakpointNames) => {
    return `@media screen and (max-width:  ${breakpointsMap[breakpoint]})`;
  },
  up: (breakpoint: BreakpointNames) => {
    return `@media screen and (min-width:  ${breakpointsMap[breakpoint]})`;
  },
  between: (breakpointMin: BreakpointNames, breakpointMax: BreakpointNames) => {
    return `@media (max-width:${breakpointsMap[breakpointMax]}) and (min-width:${breakpointsMap[breakpointMin]})`;
  },
  ...mediaqueries
};
