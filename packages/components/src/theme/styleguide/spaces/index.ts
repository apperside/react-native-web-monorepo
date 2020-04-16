import * as CSS from "csstype";
import { ObjectOrArray, ThemeSpaces } from "styled-system";
import { buildObjectOrArray } from "../../ThemeProvider";

declare module "styled-system" {

  export interface ThemeSpaces {
    NONE: number;
    XS: number;
    S: number;
    M: number;
    L: number;
    XL: number;
    XXL: number;
    DESKTOP_MAIN_PADDING: number | string;
    DESKTOP_LOW_PADDING: number | string;
    DESKTOP_LARGE_MAIN_PADDING: number | string;
    TABLET_MAIN_PADDING: number | string;
    MOBILE_MAIN_PADDING: number | string;
  }

}

/**
 * The space key is a specially-named scale intended for use with margin, padding,
 * and other layout-related CSS properties.
 * A space scale can be defined as either a plain object or an array,
 * but by convention an array is preferred.
 * This is an intentional constraint that makes it difficult to add
 * "one-off" or "in-between" sizes that could lead to unwanted and rippling affects to layout.
 * When defining space scales as an array, it is conventional to use the value 0
 * as the first value so that space[0] === 0.
 */

export const spacesMap: ThemeSpaces = {
  NONE: 0,
  XS: 2,
  S: 4,
  M: 8,
  L: 16,
  XL: 32,
  XXL: 64,
  DESKTOP_MAIN_PADDING: "130px",
  DESKTOP_LOW_PADDING: "118px",
  DESKTOP_LARGE_MAIN_PADDING: "170px",
  TABLET_MAIN_PADDING: "110px",
  MOBILE_MAIN_PADDING: 25
};
export const space: ObjectOrArray<CSS.MarginProperty<number | string>, keyof ThemeSpaces> =
  buildObjectOrArray<CSS.MarginProperty<number | string>, ThemeSpaces>(spacesMap);

Object.keys(spacesMap).forEach((breakpointKey) => {
  // space.push(spacesMap[breakpointKey]);
  // aliases
  space[breakpointKey] = spacesMap[breakpointKey];
});
