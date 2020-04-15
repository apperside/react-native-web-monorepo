import * as CSS from "csstype";
import { ObjectOrArray, ThemeSizes } from "styled-system";

/**
 * Values used for
 *
 * width, height, minWidth, maxWidth, minHeight, maxHeight, size
 */
declare module "styled-system" {

  export interface ThemeSizes {
    HEADER_DESKTOP: number,
    HEADER_MOBILE: number;
  }
}

export const sizesMap: ThemeSizes = {
  HEADER_DESKTOP: 150,
  HEADER_MOBILE: 70
};

export const sizes: ObjectOrArray<CSS.MarginProperty<number | string>, keyof ThemeSizes> = [];

Object.keys(sizesMap).forEach((breakpointKey) => {
  // sizes.push(sizesMap[breakpointKey]);
  // aliases
  sizes[breakpointKey] = sizesMap[breakpointKey];
});
