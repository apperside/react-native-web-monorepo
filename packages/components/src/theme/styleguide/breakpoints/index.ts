
import { BreakpointNames, ThemeBreakpoints, ObjectOrArray } from "styled-system";

// declare module "styled-system" {

//   export interface ThemeBreakpoints {
//     default: number | string,
//     // default is needed by styled-system in order to work
//     mobileM: number | string,
//     mobileL: number | string,
//     tablet: number | string,
//     desktopLow: number | string,
//     desktopMid: number | string,
//     // laptopL: number | string,
//     desktop: number | string,
//     desktopLarge: number | string
//   }
// }

export const buildObjectOrArray = <P1, P2>(valuesMap: P2, useArrayProps: boolean = false) => {
  // @ts-ignore
  const result: ObjectOrArray<P1, keyof P2> = [];
  Object.keys(valuesMap).forEach((valueKey) => {
    if (useArrayProps) {
      result.push(valuesMap[valueKey]);
    }
    // aliases
    result[valueKey] = valuesMap[valueKey];
  });
  return result;
};

/**
 * The logic is mobile first, so the first breakpoint is alway from 0 to the first declared one
 */
let breakpointsMap: ThemeBreakpoints = {
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

/**
 * create breakpoints aliases
 * The final structure will be an array which also has named properties
 *
 * https://styled-system.com/responsive-styles/#using-objects
 *
 */

export const buildBreakpoints = (breakpoints?: ThemeBreakpoints, useArrayProps: boolean = false) => {
  if (!breakpoints) return [];
  buildMediaQueries(breakpoints);
  breakpointsMap = breakpoints;
  // alert(buildObjectOrArray);
  return buildObjectOrArray<number | string | symbol, ThemeBreakpoints>(breakpoints, useArrayProps);
};

// @ts-ignore
const mediaqueries: { [key in keyof ThemeBreakpoints]: string } = {};
const buildMediaQueries = (breakpointsMap: ThemeBreakpoints) => {
  Object.keys(breakpointsMap).forEach((breakpointKey) => {
    mediaqueries[breakpointKey] = `@media screen and (min-width:${breakpointsMap[breakpointKey]})`;
  });
};
const breakpoints: ObjectOrArray<number | string | symbol, keyof ThemeBreakpoints> =
  buildBreakpoints(breakpointsMap, false);

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

export default breakpoints;
